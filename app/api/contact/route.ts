export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email,phone, project_type, note } = body;

    if (!name || !email || !phone) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const googleSheetEndpoint = process.env.GOOGLE_SHEET_ENDPOINT;

    if (!googleSheetEndpoint) {
      console.error("GOOGLE_SHEET_ENDPOINT is not configured.");

      return Response.json(
        {
          success: false,
          message: "Server configuration error.",
        },
        { status: 500 }
      );
    }

    const googleResponse = await fetch(googleSheetEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name,
        email,
        phone,
        project_type,
        note: note || "",
      }).toString(),
      cache: "no-store",
    });

    const responseText = await googleResponse.text();

    let googleData: {
      success?: boolean;
      message?: string;
      leadId?: string;
      error?: string;
    } | null = null;

    try {
      googleData = JSON.parse(responseText);
    } catch {
      googleData = null;
    }

    if (!googleResponse.ok || !googleData?.success) {
      console.error("Google Sheet submission failed:", responseText);

      return Response.json(
        {
          success: false,
          message:
            googleData?.error ||
            googleData?.message ||
            "Failed to save your message.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Your message has been sent successfully.",
      leadId: googleData.leadId || null,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}