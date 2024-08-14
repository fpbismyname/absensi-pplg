import { NextRequest, NextResponse } from "next/server";
import { getAccount, addAccount } from "../models/AccountModel";
import { AccountType } from "../libs/types";
import { decrypt } from "../libs/passGuard";

const login = async (req: NextRequest) => {
  try {
    const body: AccountType = await req.json();
    const Account = await getAccount(body);
    if (Account) {
      const isValidAccount = decrypt(body.password, Account.password);
      if (isValidAccount) {
        return NextResponse.json(
          {
            status: 200,
            message: "Login Success",
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            status: 401,
            message: "Invalid username or password",
          },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json(
        {
          status: 401,
          message: "Invalid username or password",
        },
        { status: 401 }
      );
    }
  } catch (err) {
    if (err instanceof SyntaxError) {
      return NextResponse.json(
        { status: 400, error: "Invalid body json format" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        {
          status: 500,
          message: "Internal server error",
        },
        { status: 500 }
      );
    }
  }
};

const register = async (req: NextRequest) => {
  try {
    const body: AccountType = await req.json();
    const Account = await addAccount(body);
    if (Account) {
      return NextResponse.json(
        {
          status: 201,
          message: "Register Successfully",
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          status: 400,
          message: "Failed to register account",
        },
        { status: 400 }
      );
    }
  } catch (err) {
    if (err instanceof SyntaxError) {
      return NextResponse.json(
        { status: 400, error: "Invalid body json format" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        {
          status: 500,
          message: "Internal server error",
        },
        { status: 500 }
      );
    }
  }
};

export { login, register };
