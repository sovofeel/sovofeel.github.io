import { NextRequest, NextResponse } from "next/server"

interface RSVPData {
  restrictions: string
  drinks: string
  timestamp: string
}

export async function POST(request: NextRequest) {
  try {
    const data: RSVPData = await request.json()

    // Validate required fields
    if (!data.drinks) {
      return NextResponse.json(
        { error: "Пожалуйста, выберите хотя бы один напиток" },
        { status: 400 }
      )
    }

    // Google Sheets integration
    // Option 1: Using Google Apps Script Web App
    // Create a Google Apps Script with the following code and deploy as web app:
    /*
    function doPost(e) {
      var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
      var data = JSON.parse(e.postData.contents);
      sheet.appendRow([
        new Date(),
        data.restrictions,
        data.drinks
      ]);
      return ContentService.createTextOutput(JSON.stringify({success: true}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    */
    
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (GOOGLE_SCRIPT_URL) {
      // Send to Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to save to Google Sheets")
      }
    } else {
      // Log for development/testing
      console.log("[v0] RSVP submission received:", data)
    }

    return NextResponse.json({
      success: true,
      message: "Ваш ответ успешно отправлен!",
    })
  } catch (error) {
    console.error("[v0] RSVP submission error:", error)
    return NextResponse.json(
      { error: "Произошла ошибка при отправке" },
      { status: 500 }
    )
  }
}
