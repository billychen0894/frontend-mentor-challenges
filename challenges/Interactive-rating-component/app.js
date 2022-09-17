const form = document.querySelector('body .rating-form')
const formInput = document.querySelectorAll('.rating-container input')

form.addEventListener('click', (event) => {
  const target = event.target
  for (let input of formInput) {
    if (input.checked && target.nodeName === 'BUTTON') {
      event.preventDefault()
      form.innerHTML = `
    <form class="rating-form">
      <div class="submit-form-wrapper">
        <div>
          <img src="images/illustration-thank-you.svg" alt="" />
        </div>
        <span class="selected-rating">You selected ${input.value} out of 5</span>
        <h1 class="form-title">Thank you!</h1>
        <p class="form-content">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </form>
`
    }
  }
})
