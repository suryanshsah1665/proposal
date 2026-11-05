# Proposal

A small, playful multi-page website built for fun: a proposal where the "No" button refuses to be clicked, followed by a date picker that sends the chosen date and time to WhatsApp, and a page of sweet messages.

**Live site:** https://proposal-pi-five.vercel.app/

## How it works

1. **`index.html`: "Can you be my Madam Jii??"**
   Hearts and roses fall in the background. The **No** button flies off the screen when you press or touch it, so **Yes** is the only real option. Clicking **Yes** triggers a burst of hearts and fades into the next page.
2. **`datetime-.html`: "Socho Achchee See.."**
   A second, more insistent question with the same trick: the **No** button flies away again, and **Yes** moves on.
3. **`datetime-final.html`: pick a date and time**
   Shows a live clock and a date and time picker. When both are chosen and **Let's plan a date** is pressed, the page:
   - opens WhatsApp (in a new tab or the app) with a ready-to-send message containing the chosen date and time, addressed to the owner's number, and
   - moves on to the plan page. The person sending the message still has to press send in WhatsApp.
4. **`plan.html`: "Our Perfect Date"**
   A countdown to the selected date and time, a four-part day plan (morning, breakfast, evening walk, candlelight dinner) where each card reveals a sticker and a short message, and a final button that opens a pop-up message.

## Tech stack

HTML, CSS, and JavaScript, with [Tailwind CSS](https://tailwindcss.com/) (CDN), [GSAP](https://gsap.com/) (animations), and Google Fonts (Dancing Script). There is no build step and no backend.

## Run locally

No installation is needed. Open `index.html` in a browser. An internet connection is required, because Tailwind, GSAP, and the fonts load from CDNs.

## Customize

- **WhatsApp number:** in `datetime-final.html`, change the `yourNumber` value to your number with the country code, without `+` or spaces (for example `919876543210`).
- **WhatsApp message:** edit the `message` text in the same `goPlan()` function.
- **Images:** replace `download.jpg` (first page) and `baby2.jpg` (second page) with your own, keeping the same file names.
- **Messages on the plan page:** edit the text in `plan.html`.

## Files

```
index.html           # Page 1: proposal
datetime-.html       # Page 2: second question
datetime-final.html  # Page 3: date and time picker, WhatsApp link
plan.html            # Page 4: countdown and messages
script.js            # Falling hearts, flying "No" button, page 1 logic
style.css
download.jpg, baby2.jpg
```

## Notes

- Built as a lighthearted side project to practice HTML, CSS, JavaScript, and animation.
- It is a static site, so it can be hosted for free on any static host such as Vercel, Netlify, or GitHub Pages.
