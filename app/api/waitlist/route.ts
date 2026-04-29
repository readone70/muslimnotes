// app/api/waitlist/route.ts

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {


    // STEP 1: Parse request
    const body = await req.json();

    const { email } = body;

    // STEP 2: Validate
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // STEP 3: Save to Supabase

    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error && error.code !== "23505") {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // STEP 4: Send email
    const resendResult = await resend.emails.send({
      from: "MuslimNotes <hello@mail.muslimnotes.com>",
      to: email,
      subject: "You're on the MuslimNotes waitlist",
      html: `
        <div style="font-family: sans-serif;">
          <h2>You’re in.</h2>
          <p>BarakAllahu feehi for joining.</p>
          <p>Knowledge is a trust, but too often, we lose it after we hear it or write it down somewhere.</p>
          <p>MuslimNotes is built to help you hold onto beneficial knowledge and grow consistently.</p>
          <p>We’re opening early access soon. Keep an eye on your inbox.</p>
          <p>JazakAllahu Khair.</p>
          <br/>
          <p>The MuslimNotes Team</p>
          <p><a href="https://muslimnotes.com">muslimnotes.com</a></p>
       </div>
      `,
    });


    return NextResponse.json({ success: true });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}