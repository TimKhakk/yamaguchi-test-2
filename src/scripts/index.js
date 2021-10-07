const woman = document.querySelector(".woman");
const hole = document.querySelector(".hole");

const womanAppear = () => {
  setTimeout(() => {
    hole.classList.add('active')
  }, 500)


  setTimeout(() => {
    woman.classList.add('active')
  }, 1000)

  setTimeout(() => {
    woman.classList.add('fly')
  }, 2500)
}

womanAppear()
