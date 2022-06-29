import React, { Component } from 'react'
import NewsItem from './NewsItem'
import "./css/News.css"

export class News extends Component {

  articles = [
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": "HT News Desk",
      "title": "Watch | Biden walks up to Modi to share pleasantries ahead of G7 group photo",
      "description": "G7 summit: PM Modi, standing next to Justin Trudeau for a group photo, was also seen interacting with the Canadian Prime Minister. The two leaders are set to hold a bilateral meeting later in the evening. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/watch-biden-walks-up-to-modi-to-share-pleasantries-ahead-of-g7-group-photo-101656333289587.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/06/27/1600x900/PTI06-27-2022-000177B-0_1656334197791_1656334217655.jpg",
      "publishedAt": "2022-06-27T12:51:33+00:00",
      "content": "Prime Minister Narendra Modi on Monday was seen sharing a couple of warm moments with global leaders, including United States President Joe Biden, German Chancellor Olaf Scholz, French President Emma… [+1379 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Makepeace Sitlhou",
      "title": "‘All is lost’: Floods in India’s Assam leave trail of destruction",
      "description": "With homes and fields submerged, people forced into camps on roads, forests and markets are facing hunger and diseases.",
      "url": "http://www.aljazeera.com/news/2022/6/27/all-is-lost-floods-in-indias-assam-leave-trail-of-destruction",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/06/PRK8026.jpg?resize=1200%2C630",
      "publishedAt": "2022-06-27T09:55:43Z",
      "content": "Nellie and Raha, Assam Sakina Khatoon is among 300 people marooned in a reserve forest for more than a week since the deadly floods ravaged at least 12 villages in Nellie in Morigaon district of Indi… [+7543 chars]"
    },
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": "GK Web Desk",
      "title": "Two terrorists killed in ongoing Kulgam gunfight: police",
      "description": "<ol><li>Two terrorists killed in ongoing Kulgam gunfight: police  Greater Kashmir\r\n</li><li>Two militants killed in gunfight in south Kashmir's Kulgam, operation on  The Indian Express\r\n</li><li>2 terrorists killed in encounter in J&K's Kulgam: Police  Times …",
      "url": "https://www.greaterkashmir.com/kashmir/two-terrorists-killed-in-ongoing-kulgam-gunfight-police",
      "urlToImage": "https://gumlet.assettype.com/greaterkashmir%2F2022-04%2Fad27b2fb-dd11-4263-a253-d7703132eb2f%2FEncounter_in_Malwah_village_of_Kunzar_area_of_District_Baramullah_4.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
      "publishedAt": "2022-06-27T09:37:37+00:00",
      "content": "\"KulgamEncounterUpdate: 01 more #terrorist killed (Total 02). #Operation going on. Further details shall follow,\" police said."
    },
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": "Isha Sahai Bhatnagar",
      "title": "‘Agnipath’: IAF receives nearly 57,000 applications; Cong continues protests",
      "description": "Prime Minister Narendra Modi announced the Agnipath scheme on June 14 to enlist the youth in the Indian armed forces, who will be referred to as ‘Agniveers’ post induction | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/agnipath-iaf-receives-nearly-57-000-applications-congress-continues-protests-101656316605263.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/06/27/1600x900/5ac1b830-f5ee-11ec-9399-aa8babdf721f_1656321520067.jpg",
      "publishedAt": "2022-06-27T07:56:44+00:00",
      "content": "Amid nationwide protests by the Opposition, the Indian Air Force (IAF) said that as of Monday they have received 56,960 applications since the official launch of the Agnipath recruitment scheme for t… [+1564 chars]"
    },
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "Opposition candidate Yashwant Sinha files nomination for Presidential poll",
      "description": "India News: Yashwant Sinha filed nomination papers for July 18 Presidential election on Monday in the presence of Congress leader Rahul Gandhi, NCP chief Sharad P",
      "url": "https://timesofindia.indiatimes.com/india/opposition-candidate-yashwant-sinha-files-nomination-for-presidential-poll/articleshow/92486163.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-92487011,width-1070,height-580,imgsize-49386,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-06-27T06:50:00+00:00",
      "content": "Yashwant Sinha: From key Advani aide to opposition presidential candidate against BJPNEW DELHI: Yashwant Sinha's nearly four-decade-old political life has been marked by bureaucratic efficiency and c… [+180 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "WANJOHI KABUKURU",
      "title": "To combat coral bleaching, Kenya turns to reef nurseries",
      "description": "WASINI, Kenya (AP) — Minutes away from the Kenyan mainland, the densely forested island of Wasini is one of several starting lines for coral reef restoration efforts in the western Indian Ocean. On a rare calm day during the normally turbulent monsoon season,…",
      "url": "https://apnews.com/e35730bb19b65a9cfa76e4d010d18a27",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/589000b604c7415da96e8beed5dfed77/3000.jpeg",
      "publishedAt": "2022-06-27T03:01:27Z",
      "content": "WASINI, Kenya (AP) — Minutes away from the Kenyan mainland, the densely forested island of Wasini is one of several starting lines for coral reef restoration efforts in the western Indian Ocean. On a… [+4951 chars]"
    },
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": "TN National Desk",
      "title": "Punjab leader Simranjit Singh Mann attributes Lok Sabha bypoll victory to Khalistani militant",
      "description": "The 77-year-old said he would raise the issues of \"Indian Army's atrocities in Kashmir\" in Parliament. Mann also said he would also flag the \"killing of tribal people in Bihar and Chhattisgarh calling them Naxalites\". Expressing concern over his win, Congress…",
      "url": "https://www.timesnownews.com/india/punjab-leader-simranjit-singh-mann-attributes-lok-sabha-bypoll-victory-to-khalistani-militant-article-92479929",
      "urlToImage": "https://static.tnn.in/thumb/msid-92479929,imgsize-100,width-1280,height-720,resizemode-75/92479929.jpg",
      "publishedAt": "2022-06-27T01:56:05+00:00",
      "content": "GST council meet: Rate tweaks, states' compensation, easier e-commerce registration norms on the cards"
    },
    {
      "source": {
        "id": "fortune",
        "name": "Fortune"
      },
      "author": "Emma Hinchliffe, Paige McGlauflin",
      "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
      "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
      "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
      "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
      "publishedAt": "2022-06-01T13:22:34Z",
      "content": "Skip to Content"
    },
    {
      "source": {
        "id": "the-hindu",
        "name": "The Hindu"
      },
      "author": "Ananth Krishnan",
      "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
      "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
      "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
      "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
      "publishedAt": "2021-07-22T15:47:01Z",
      "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
    },
    {
      "source": {
        "id": "rte",
        "name": "RTE"
      },
      "author": "RTÉ News",
      "title": "UK continues with reopening plan despite concerns",
      "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
      "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
      "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
      "publishedAt": "2021-05-15T09:33:48Z",
      "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Rajat Pandit",
      "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
      "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
      "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T08:29:00Z",
      "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Times Of India",
      "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
      "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
      "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T05:44:49Z",
      "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "PTI",
      "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
      "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
      "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T05:43:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Bloomberg",
      "title": "Even record death toll may hide extent of India’s Covid crisis",
      "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
      "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T04:41:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Dipak K Dash",
      "title": "Government to provide 5 kg free food grains to poor for May & June",
      "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
      "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T04:23:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
      "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
      "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T03:54:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Times Of India",
      "title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
      "description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
      "url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-22T16:20:06Z",
      "content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
      "description": "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
      "publishedAt": "2020-04-25T03:00:09Z",
      "content": "R Ashwin has said that he is \"fighting my own benchmarks\" because his Test performances overseas are being measured against his heroics in India. Despite being the country's best long-form spinner in… [+3347 chars]"
    }
  ]

  constructor(){
    super();
    console.log("Constructor");

    this.state= {
      articles: this.articles
    }

  }
  render() {
    return (
      <div>
        <h1 className='news-primary-heading'>NewNew News- Top Heading</h1>
        <div className="news-grid">
            {this.state.articles.map((e)=>{
              return <NewsItem key={e.url} title={e.title} description={e.description.slice(0,100)+"......."} imageUrl={e.urlToImage} newsUrl={e.url} />

            })}
        </div>
      </div>
    )
  }
}

export default News