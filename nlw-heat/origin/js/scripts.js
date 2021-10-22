// document.getElementById('userName').textContent = 'Daniel Oliveira'
// O comando abaixo faz a mesma coisa que o comando acima
// userName.textContent = 'Daniel Oliveira'

const linksSocialMedia = {
  github: 'danielbarrosdeoliveira',
  youtube: 'channel/UCQURUfdaWsPecz7R6S3hW7w',
  instagram: 'danieloliveira_dev',
  facebook: 'danielbarrosoliveira',
  linkedin: 'in/danielbarrosdeoliveira/'
}

const changeSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

const getGithubProfileInfos = () => {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
