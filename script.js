let scrollRevealOption = {
    distance: "15px",
    duration: 500,
};
ScrollReveal().reveal(".conta", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal(".conta", {
     ...scrollRevealOption,
     delay: 500,
});

let quotes = [
"Dreams don't work unless you do.",
  "Fall seven times, stand up eight.",
  "Happiness is not by chance, but by choice.",
  "Do more things that make you forget to check your phone.",
  "Be a voice, not an echo.",
  "Stars can't shine without darkness.",
  "Sometimes the smallest step in the right direction ends up being the biggest step of your life.",
  "Progress, not perfection.",
  "You didn’t come this far to only come this far.",
  "The comeback is always stronger than the setback.",
  "Don't count the days—make the days count.",
  "What you focus on grows.",
  "You are stronger than you think.",
  "It's never too late to start over.",
  "Your vibe attracts your tribe.",
  "If it matters to you, you'll find a way.",
  "Collect moments, not things.",
  "Rise above the storm and you will find the sunshine.",
  "Take the risk or lose the chance.",
  "Be the energy you want to attract.",
  "Even wilted flowers still have beauty.",
  "Courage doesn’t always roar—sometimes it’s a whisper that says 'try again tomorrow'.",
  "There is light even in the quietest corners.",
  "Let go of who you think you’re supposed to be.",
  "You grow through what you go through.",
  "There’s a crack in everything—that’s how the light gets in.",
  "Your emotions are valid.",
  "Keep going, even if it's just one small step today.",
  "Be kind to yourself—you're learning.",
  "Pain reminds you that you’re human, and healing reminds you that you’re resilient.",
  "Don’t rush the process—growth takes time.",
  "You weren’t meant to shrink for others.",
  "Strength sometimes looks like softness.",
  "Even if it hurts now, you’ll shine later.",
  "Rain helps you bloom.",
  "Every goodbye teaches you something new.",
  "It's brave to ask for help.",
  "You’re not broken—just bending toward a better shape.",
  "Be gentle with the parts of you still hurting.",
  "Sometimes you need to feel the low to rise again.",
  "You’re building a future, even through your tears.",
  "Breathe through the ache; there's peace ahead.",
  "Even if you’ve lost the map, keep walking.",
  "Don’t let the weight of yesterday steal today’s light.",
  "You’re enough—more than you know.",
   "Your story isn’t over yet.",
  "Broken crayons still color.",
  "Even the darkest night will end and the sun will rise.",
  "You are allowed to be both a masterpiece and a work in progress.",
  "Healing takes time, and that's perfectly okay.",
  "It’s okay not to be okay all the time.",
  "Your scars are proof that you survived.",
  "Sometimes you need to break to become stronger.",
  "Every storm runs out of rain.",
  "It’s the quiet moments that build our strength.",
  "Hope is the only thing stronger than fear.",
  "Some days are for falling apart, and others are for putting yourself back together.",
  "You matter, even when you feel invisible.",
  "Behind every smile is a story you don’t see.",
  "Not all storms come to disrupt your life—some come to clear your path.",
  "You’re not alone, even when it feels like it.",
  "Let the tears flow if they need to; they wash the pain away.",
  "Being vulnerable is a sign of strength, not weakness.",
  "Sometimes we survive on hope alone.",
  "Lost is just another way of finding yourself.",
  "A single kind word can change someone’s entire day.",
  "You don’t have to have it all figured out.",
  "It's okay to restart—you're not a failure.",
  "Just breathe; you're doing better than you think.",
  "Sadness is not permanent—it passes like seasons."
]

let text = document.querySelector(".text");
let generateBtn = document.querySelector(".Generate");
generateBtn.addEventListener("click",()=>{
let random = Math.floor(Math.random() * quotes.length);
let RandomQuote = quotes[random];
text.innerHTML = ` " ${RandomQuote} "`;
});


