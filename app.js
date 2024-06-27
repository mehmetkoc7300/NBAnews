const newsContainer = document.querySelector("news-container")
const news = document.querySelector(".news")
const userImage = document.querySelector(".user-image")
const username = document.querySelector(".username")
const role = document.querySelector(".role")

const allNews = [
    {
      name: 'Anthony Slater',
      position: 'Senior Writer, Warriors',
      photo:
        'https://cdn.theathletic.com/cdn-cgi/image/width=96,format=auto/https://cdn.theathletic.com/app/uploads/2017/10/24214221/slater-byline.png',
      text:
        "Curry sustained a left shoulder subluxation that caused damage to his labrum, league sources told The Athletic, during a game against the Pacers on Dec. 14.Curry sustained a left shoulder subluxation that caused damage to his labrum, league sources told The Athletic, during a game against the Pacers on Dec. 14.The Warriors said shortly after the injury that the MVP candidate will not need surgery.",
    },
    {
      name: 'Shams Charania',
      position: 'Senior Insider, NBA',
      photo: 'https://cdn.theathletic.com/cdn-cgi/image/width=96,format=auto/https://cdn.theathletic.com/app/uploads/2018/08/24163140/Charania-Shams-Headshot-082318.jpg',
      text:
        'The Indiana Pacers and center Myles Turner have opened up contract extension discussions and are exploring a potential new deal, league sources with direct knowledge of the discussions who are unauthorized to speak publicly on the matter tell The Athletic.The Pacers have the ability to reach a renegotiation-and-extension with Turner due to currently having roughly $25 million in salary cap space. The Pacers can offer Turner up to $19.1 million more this year on top of his $18 million salary to get him to his individual max of $37.1 million for the 2022-23 season alone, and then drop his salary in the following seasons of a potential new contract. ',
    },
    {
      name: 'Jeff Schultz',
      position: 'Senior Writer, Atlanta',
      photo: 'https://cdn.theathletic.com/cdn-cgi/image/width=96,format=auto/https://cdn.theathletic.com/app/uploads/2018/08/06152022/Jeff_Schultz.jpg',
      text:
        "Atlanta Hawks president of basketball operations Travis Schlenk is stepping down from his position and moving into an advisory role, the team announced Wednesday.General manager Landry Fields will assume Schlenk’s previous responsibilities and “oversee the day-to-day operations” of the team, per the Hawks’ announcement.Schlenk will be an adviser to principal owner Tony Ressler.",
    },
    {
      name: 'Joe Vardon',
      position: 'Senior Writer, NBA',
      photo: 'https://cdn.theathletic.com/cdn-cgi/image/width=96,format=auto/https://cdn.theathletic.com/app/uploads/2018/09/21184136/Vardon-Joe-Headshot-092018.jpg',
      text:
        "Dirk Nowitzki, Gregg Popovich and Dwyane Wade are among several high-profile first-time nominees announced Wednesday for the Naismith Memorial Basketball Hall of Fame’s 2023 class.Other notable first-time nominees include Pau Gasol, Tony Parker and the 1976 U.S. Olympic women’s team.",
    },
    {
      name: 'Darnell Mayberry',
      position: 'Senior Writer, Bulls',
      photo: 'https://cdn.theathletic.com/cdn-cgi/image/width=96,format=auto/https://cdn.theathletic.com/app/uploads/2018/10/30192712/Mayberry-Darnell-Headshot-102918.jpg',
      text:
        "With two 2022 All-Stars in Zach LaVine and DeMar DeRozan and former All-Star center Nikola Vucevic, the Chicago Bulls had hoped to be a serious contender in the Eastern Conference and build upon their No. 6 seed finish from last season.But as this season has gone on, with the Bulls now sitting at a disappointing 11-18, and while playing without their star point guard Lonzo Ball due to a lingering knee injury, serious questions have arisen within the locker room about whether their two star wings can click together at a high level on the court this season and beyond.",
    },
    {
      name: 'Jared Weiss',
      position: 'Staff Writer, Celtics',
      photo:
        'https://cdn.theathletic.com/cdn-cgi/image/width=96,format=auto/https://cdn.theathletic.com/app/uploads/2018/04/12143507/Jared_Weiss.jpg',
      text:
        'Just because you lose doesn’t mean you suck. Joe Mazzulla doesn’t want the Celtics to conflate results with process. Just because players are missing open 3s at a facepalm-inducing clip doesn’t mean they’re as bad as their recent record.“The brain isn’t locked in on things when you’re winning. You’re locked in on the reasons why you’re winning, not the things that could be building negatively,” Mazzulla said. “And so I think it’s just a balance.',
    },
    {
      name: 'David Aldridge',
      position: 'Senior Columnist, NBA',
      photo: 'https://cdn.theathletic.com/cdn-cgi/image/width=96,format=auto/https://cdn.theathletic.com/app/uploads/2018/09/10165644/DA_avatar.jpg',
      text:
        'Two weeks after Victor Wembanyama’s wildly successful U.S. debut in Las Vegas, the hype around the 18-year-old French phenom is even greater than it was when he dropped 73 points in two exhibition games against G League Ignite — including going 7-of-7 on 3-pointers and looking effortless in doing so en route to scoring 37 points in the first game Oct. 4. Purposely, I wanted to wait a while after that display, thinking the ardor for Wembanyama would cool at least a little as the inevitable nitpicking began about the 7-foot-4 big man with the 8-foot wingspan.',
    },
  ]

let idx = 1

setInterval(updateNews, 10000)

function updateNews() {
    news.innerHTML = allNews[idx].text
    userImage.src = allNews[idx].photo
    username.innerHTML = allNews[idx].name
    role.innerHTML = allNews[idx].position
    idx++

    if(idx > allNews.length -1){
        idx = 0
    }
}