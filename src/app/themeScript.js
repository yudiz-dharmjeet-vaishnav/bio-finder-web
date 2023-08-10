// (function () {
//   function setMode() {
//     const theme = window?.localStorage?.getItem("bf-theme") || 'dark'
//     console.log(window, document.body)
//     if (theme === "dark") {
//       window.isDark = true
//       document?.body?.setAttribute('data-mode', 'dark')
//     } else {
//       window.isDark = false
//       document?.body?.setAttribute('data-mode', 'light')
//     }
//   }
//   document.addEventListener("DOMContentLoaded", () => {
//     setMode()
//   });
//   setMode()
// })()