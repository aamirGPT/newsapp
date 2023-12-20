import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import placeholder from "../images/placeholder.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const demoData = {
        status: "ok",
        totalResults: 40,
        articles: [
            {
                source: {
                    id: "the-washington-post",
                    name: "The Washington Post",
                },
                author: "Michael Varnum, Ian Hohm",
                title: "Winter affects mood, mind, weight and sex drives, research suggests - The Washington Post",
                description:
                    "In the winter, people tend to eat more, move less and mate more.",
                url: "https://www.washingtonpost.com/wellness/2023/12/12/winter-mood-sex-concentration-diet/",
                urlToImage:
                    "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5R2OW74SEVIVIWXZLIUTKS35FY.jpg&w=1440",
                publishedAt: "2023-12-12T12:16:22Z",
                content:
                    "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nA growing body of research in psychology and related fields suggests that winter brings some profound changes in how people think, fee… [+5564 chars]",
            },
            {
                source: { id: null, name: "Forbes" },
                author: "David Phelan",
                title: "iOS 17.2: Apple Suddenly Releases Urgent Update Warning For All iPhone Users - Forbes",
                description:
                    "The latest iPhone update has been much-anticipated. Here’s what’s in it, how to get it and why you should want to have it on your phone pronto.",
                url: "https://www.forbes.com/sites/davidphelan/2023/12/12/ios-172-apple-suddenly-releases-urgent-update-for-all-iphone-users/",
                urlToImage:
                    "https://imageio.forbes.com/specials-images/imageserve/657802625bf83be1a080ca5f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                publishedAt: "2023-12-12T12:09:00Z",
                content:
                    "December 12 update below. This post was first published on December 11, 2023.\r\nForbes senior contributor Kate OFlaherty has now set out the details of the security ramifications of iOS 17.2. Read her… [+9339 chars]",
            },
            {
                source: { id: null, name: "CNBC" },
                author: "Elliot Smith, Holly Ellyatt",
                title: "European markets muted as investors await U.S. inflation data, Fed meeting - CNBC",
                description:
                    "European markets were mixed on Tuesday as global investors look ahead to the Federal Reserve policy meeting and the latest U.S. inflation data.",
                url: "https://www.cnbc.com/2023/12/12/european-markets-live-updates-stocks-news-data-and-earnings.html",
                urlToImage:
                    "https://image.cnbcfm.com/api/v1/image/107338738-17008407522023-11-24t154141z_949066496_rc2rj4a6e65i_rtrmadp_0_usa-holidayshopping-blackfriday.jpeg?v=1700840888&w=1920&h=1080",
                publishedAt: "2023-12-12T11:53:00Z",
                content:
                    "U.K. regular wages grew at an annual 7.3% in November, down from 7.8% the previous month welcome news for the Bank of England ahead of its monetary policy decision on Thursday.\r\nJob vacancies fell on… [+1044 chars]",
            },
            {
                source: { id: null, name: "Yahoo Entertainment" },
                author: "John Viljoen and Sujata Rao",
                title: "Bonds Gain and Dollar Drops With CPI Data to Come: Markets Wrap - Yahoo Finance",
                description:
                    "(Bloomberg) -- Treasury yields and the dollar fell, while US stock futures posted small moves ahead of a crucial inflation report. Most Read from...",
                url: "https://finance.yahoo.com/news/asia-shares-set-climb-key-224001746.html",
                urlToImage:
                    "https://s.yimg.com/ny/api/res/1.2/wFGdw8bgOrrawCMNS1iScw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MTc-/https://media.zenfs.com/en/bloomberg_markets_842/fa4987a9cbdec9639dcc54b20ea50506",
                publishedAt: "2023-12-12T11:23:26Z",
                content:
                    "(Bloomberg) -- Treasury yields and the dollar fell, while US stock futures posted small moves ahead of a crucial inflation report.\r\nMost Read from Bloomberg\r\nEquity traders avoided big bets before a … [+5294 chars]",
            },
            {
                source: { id: "abc-news", name: "ABC News" },
                author: "Luis Martinez",
                title: "Houthi missile strikes merchant ship in Red Sea: US official - ABC News",
                description:
                    "Latest escalation by Houthis targeting ships near Red Sea",
                url: "https://abcnews.go.com/International/houthi-missile-strikes-merchant-ship-red-sea-us/story?id=105570184",
                urlToImage:
                    "https://i.abcnewsfe.com/a/e008677a-5ad7-477e-ae86-b04596986dd4/uss-carney-ap-lv-231203_1701622465691_hpMain_16x9.jpg?w=992",
                publishedAt: "2023-12-12T11:17:07Z",
                content:
                    "A merchant vessel sailing in the southern Red Sea was struck by a land-based cruise missile fired from Houthi-controlled Yemen, according to a U.S. official.\r\nU.S. Central Command said in a post on X… [+1799 chars]",
            },
            {
                source: { id: null, name: "BBC News" },
                author: null,
                title: "Google loses monopoly case to Fortnite maker Epic Games - BBC.com",
                description:
                    "A jury found that the tech giant used illegal strategies to maintain its app store dominance.",
                url: "https://www.bbc.com/news/business-67688720",
                urlToImage:
                    "https://ichef.bbci.co.uk/news/1024/branded_news/22EA/production/_131983980_gettyimages-1068933518.jpg",
                publishedAt: "2023-12-12T10:44:00Z",
                content:
                    "By Suranjana TewariBBC News\r\nHundreds of millions of people access gaming apps through Google's Play Store\r\nThe maker of popular video game Fortnite has won a US court battle against Google, with a j… [+4662 chars]",
            },
            {
                source: { id: "abc-news", name: "ABC News" },
                author: "Nadine El-Bawab, Mary Kekatos, Jolie Lash",
                title: "Texas Supreme Court rules against woman who sued for an emergency abortion - ABC News",
                description:
                    "Kate Cox asked for an abortion to preserve her fertility.",
                url: "https://abcnews.go.com/US/texas-woman-sued-abortion-now-leaving-state-care/story?id=105558777",
                urlToImage:
                    "https://i.abcnewsfe.com/a/b81b6d9d-74e6-4b0f-bb9a-4609949a7f77/kate-cox-gty-mo-20231207_1701962736538_hpMain_16x9.jpg?w=992",
                publishedAt: "2023-12-12T10:37:12Z",
                content:
                    "Texas' Supreme Court on Monday ruled against a woman who sued for an emergency abortion in her home state, overturning a lower courts ruling last week.\r\nKate Cox, 31, filed a lawsuit after she said s… [+5868 chars]",
            },
            {
                source: { id: "abc-news", name: "ABC News" },
                author: "Peter Charalambous",
                title: "3 things to know about Trump's defense in his New York civil fraud trial - ABC News",
                description:
                    "Trump's defense attorneys are scheduled to rest their case today.",
                url: "https://abcnews.go.com/US/3-things-trumps-defense-new-york-civil-fraud/story?id=105479767",
                urlToImage:
                    "https://i.abcnewsfe.com/a/cf5944fa-f882-4c99-8811-40701f13fc0f/trump-fraud-courts-2-rt-thg-231207_1701963055810_hpMain_16x9.jpg?w=992",
                publishedAt: "2023-12-12T10:16:48Z",
                content:
                    'Donald Trump was nearly halfway through his testimony in his civil fraud trial last month when he pulled a rumpled note from his jacket.\r\n"I would love to read this, Your Honor, if I could. Am I allo… [+5254 chars]',
            },
            {
                source: { id: "reuters", name: "Reuters" },
                author: "Andrew Macaskill, Michael Holden, Sarah Young",
                title: "Sunak faces crunch UK parliamentary showdown over Rwanda asylum plan - Reuters UK",
                description:
                    "British Prime Minister Rishi Sunak faces the biggest parliamentary test of his premiership on Tuesday when lawmakers vote on his divisive plan to send asylum seekers to live in Rwanda.",
                url: "https://www.reuters.com/world/uk/rishi-sunak-faces-tense-uk-parliamentary-showdown-over-rwanda-asylum-plan-2023-12-12/",
                urlToImage:
                    "https://www.reuters.com/resizer/zjDi3CFHGfl-PoRkGWz2K3QchuU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/E4TFRXPLMNPNHGKN5TWHR7M4L4.jpg",
                publishedAt: "2023-12-12T10:07:00Z",
                content:
                    "LONDON, Dec 12 (Reuters) - British Prime Minister Rishi Sunak faces the biggest parliamentary test of his premiership on Tuesday when lawmakers vote on his divisive plan to send asylum seekers to liv… [+4671 chars]",
            },
            {
                source: { id: "engadget", name: "Engadget" },
                author: "Steve Dent",
                title: "Google's superfast 20Gbps Wi-Fi 7 Fiber plan costs $250 a month - Engadget",
                description:
                    "If you've been thinking about hosting your own mini data center or need to stream 1,333 Netflix 4K programs at once, Google Fiber has the answer.",
                url: "https://www.engadget.com/googles-superfast-20gbps-wi-fi-7-fiber-plan-costs-250-a-month-095511377.html",
                urlToImage:
                    "https://s.yimg.com/ny/api/res/1.2/8i7K_wDETT.zgkjK_Yh5Fg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-02/aa5acaf0-acad-11ed-bcef-2a3b28acce0e",
                publishedAt: "2023-12-12T09:55:11Z",
                content:
                    "If you've been thinking about hosting your own mini data center or need to stream 1,333 Netflix 4K programs at once, Google Fiber has the answer. The Alphabet-owned ISP will launch it's 20Gbps servic… [+2206 chars]",
            },
            {
                source: { id: null, name: "BBC News" },
                author: null,
                title: "Rina Gonoi: Three Japanese ex-soldiers found guilty of sexual assault - BBC.com",
                description:
                    "The landmark verdict comes after a 24-year-old soldier went public with accusations against her ex-colleagues.",
                url: "https://www.bbc.com/news/world-asia-67688678",
                urlToImage:
                    "https://ichef.bbci.co.uk/news/1024/branded_news/F1F2/production/_131983916_gettyimages-1247522451.jpg",
                publishedAt: "2023-12-12T09:44:00Z",
                content:
                    "By Nicholas Yong &amp; Shaimaa KhalilBBC News, Singapore and Tokyo\r\nMs Gonoi said her colleagues made remarks about her body and would grope or rub against her with others watching\r\nA Japanese court … [+5571 chars]",
            },
            {
                source: { id: "reuters", name: "Reuters" },
                author: "Trevor Hunnicutt",
                title: "Zelenskiy makes 11th hour plea for Ukraine war funds in Washington - Reuters",
                description:
                    "Ukrainian President Volodymyr Zelenskiy on Tuesday plans a last-ditch plea to U.S. lawmakers to keep military support flowing as he battles Russia, in visits to the White House and Capitol Hill.",
                url: "https://www.reuters.com/world/europe/zelenskiy-makes-11th-hour-plea-ukraine-war-funds-washington-2023-12-12/",
                urlToImage:
                    "https://www.reuters.com/resizer/O5D_wEzuIlvz1KyywEQxlrstpGg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/42VP2BLKIFIRNFOLGRTKPVWFBY.jpg",
                publishedAt: "2023-12-12T08:28:00Z",
                content:
                    "WASHINGTON, Dec 12 (Reuters) - Ukrainian President Volodymyr Zelenskiy on Tuesday plans a last-ditch plea to U.S. lawmakers to keep military support flowing as he battles Russia, in visits to the Whi… [+4989 chars]",
            },
            {
                source: { id: "reuters", name: "Reuters" },
                author: "Reuters",
                title: "'Barbie' edges 'Oppenheimer' to lead Golden Globe nominations - Reuters",
                description: null,
                url: "https://www.reuters.com/lifestyle/oppenheimer-killers-flower-moon-land-golden-globe-nominations-2023-12-11/",
                urlToImage: null,
                publishedAt: "2023-12-12T08:14:00Z",
                content: null,
            },
            {
                source: { id: null, name: "The Athletic" },
                author: "Fabian Ardaya",
                title: "Ohtani to defer $68 million per year in arrangement with Dodgers - The Athletic",
                description:
                    "The structure is intended to provide the Dodgers additional cash flow and payroll flexibility.",
                url: "https://theathletic.com/5129506/2023/12/11/dodgers-shohei-ohtani-contract-deferrals/",
                urlToImage:
                    "https://cdn.theathletic.com/app/uploads/2023/12/11173302/GettyImages-1649232265-scaled.jpg",
                publishedAt: "2023-12-12T07:42:52Z",
                content:
                    "Shohei Ohtanis record-setting 10-year, $700 million deal includes a series of unprecedented deferrals, a person briefed on the terms told The Athletic on Monday.\r\nIn an effort to enable the Los Angel… [+3017 chars]",
            },
            {
                source: { id: "espn", name: "ESPN" },
                author: "Marcel Louis-Jacques",
                title: "Dolphins' Tyreek Hill hampered by ankle injury in loss to Titans - ESPN",
                description:
                    'Dolphins wide receiver Tyreek Hill played only 33 snaps Monday night after suffering an ankle injury in the first quarter. He said he went back into the game in the third quarter to "bring some energy and be that spark."',
                url: "https://www.espn.com/nfl/story/_/id/39095200/dolphins-tyreek-hill-hampered-ankle-injury-loss-titans",
                urlToImage:
                    "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1212%2Fr1265300_1296x729_16%2D9.jpg",
                publishedAt: "2023-12-12T07:11:00Z",
                content:
                    "MIAMI GARDENS -- Miami Dolphins wide receiver Tyreek Hill played only 33 snaps in Monday night's 28-27 loss to the Tennessee Titans after suffering an ankle injury in the first quarter.\r\nHill was tac… [+5431 chars]",
            },
            {
                source: { id: null, name: "CBS Sports" },
                author: "",
                title: "Giants' Tommy DeVito makes history: All the records the rookie QB broke in upset 'MNF' win vs. Packers - CBS Sports",
                description: "Talk about a trend-setter in the Big Apple",
                url: "https://www.cbssports.com/nfl/news/giants-tommy-devito-makes-history-all-the-records-the-rookie-qb-broke-in-upset-mnf-win-vs-packers/",
                urlToImage:
                    "https://sportshub.cbsistatic.com/i/r/2023/12/12/c20e90b0-f8a9-4dcf-9277-10aa59d6d5c3/thumbnail/1200x675/b4556fc65caacaf709318cdd303c57ba/tommy-devito-giants-blue-g.jpg",
                publishedAt: "2023-12-12T05:28:28Z",
                content:
                    "Tommy DeVito isn't just making waves for his Italian panache (and scene-stealing agent). The Giants rookie quarterback is also setting records as New York's improbably poised starter. Not only did he… [+1133 chars]",
            },
            {
                source: { id: "associated-press", name: "Associated Press" },
                author: "COLLIN BINKLEY",
                title: "Backlash to House testimony shines spotlight on new generation of Ivy League presidents - The Associated Press",
                description:
                    "The university presidents called before last week’s congressional hearing on antisemitism had more in common than strife on their campuses: The leaders of the University of Pennsylvania, Harvard and MIT were all women who were relatively new in their position…",
                url: "https://apnews.com/article/ivy-league-presidents-backlash-women-021ec60af6a5a5279c644376de065738",
                urlToImage:
                    "https://dims.apnews.com/dims4/default/4a22a50/2147483647/strip/true/crop/8441x4748+0+440/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F45%2Fb6%2Fc719b8ae5d5dab64ab7fb04a8da9%2F16b62a5af27641ceacf6cf1858f7cb23",
                publishedAt: "2023-12-12T05:24:41Z",
                content:
                    "WASHINGTON (AP) The university presidents called before a congressional hearing on antisemitism last week had more in common than strife on their campuses: The leaders of the University of Pennsylvan… [+5030 chars]",
            },
            {
                source: { id: null, name: "YouTube" },
                author: null,
                title: "Tennessee Titans vs. Miami Dolphins | 2023 Week 14 Game Highlights - NFL",
                description:
                    "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
                url: "https://www.youtube.com/watch?v=ArQ8wriT0Zk",
                urlToImage:
                    "https://i.ytimg.com/vi/ArQ8wriT0Zk/maxresdefault.jpg",
                publishedAt: "2023-12-12T05:02:06Z",
                content: null,
            },
            {
                source: { id: "cbs-news", name: "CBS News" },
                author: "Jesse Zanger",
                title: "FDNY reports no victims in Bronx partial building collapse - CBS New York",
                description:
                    "A corner of the seven-story building on West Burnside Avenue and Phelan Place in Morris Heights came crashing down at around 3:30 p.m. The stability of the building remains in question.",
                url: "https://www.cbsnews.com/newyork/news/bronx-building-partially-collapses/",
                urlToImage:
                    "https://assets2.cbsnewsstatic.com/hub/i/r/2023/12/11/9fc03ec1-3687-458c-be64-7745402235d2/thumbnail/1200x630/7802437b71089c9f91d202380a3cedd1/bronx-building-collapse-live-jd-hi-res-still-1.jpg?v=07160a3d82bc4d81e93fbc43cb05e8e7",
                publishedAt: "2023-12-12T04:28:00Z",
                content:
                    "NEW YORK -- In what could be described by some as a miracle, the FDNY reported Monday night it had completed its search of the rubble and found no victims in the Bronx partial building collapse.\r\nA c… [+5794 chars]",
            },
            {
                source: {
                    id: "the-washington-post",
                    name: "The Washington Post",
                },
                author: "Joel Achenbach",
                title: "Asteroid pieces brought to Earth may offer clue to life's origin - The Washington Post",
                description:
                    "The scientific community got its first description of the material recovered by NASA’s OSIRIS-REx mission at the fall meeting of the American Geophysical Union.",
                url: "https://www.washingtonpost.com/science/2023/12/11/nasa-osiris-rex-sample-results/",
                urlToImage:
                    "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/K33KIWU7LNL3GEGZIGWXFKAD54_size-normalized.jpg&w=1440",
                publishedAt: "2023-12-12T03:45:39Z",
                content:
                    "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nBefore Earth had biology, it had chemistry. How the one followed from the other how a bunch of boringmolecules transformed themselves … [+6844 chars]",
            },
            {
                source: {
                    id: null,
                    name: "Yahoo Entertainment",
                },
                author: "Winnie Hsu",
                title: "European Bonds and Stocks Gain on Rate-Cut Bets: Markets Wrap - Yahoo Finance",
                description:
                    "(Bloomberg) -- European stocks gained and bond yields across the euro region fell on Wednesday as worsening economic data and slowing inflation underscored...",
                url: "https://finance.yahoo.com/news/asia-stocks-track-wall-street-223104125.html",
                urlToImage:
                    "https://media.zenfs.com/en/bloomberg_markets_842/d78a4b655e5928e5441d8c27916d4283",
                publishedAt: "2023-12-20T08:20:49Z",
                content:
                    "(Bloomberg) -- European stocks gained and bond yields across the euro region fell on Wednesday as worsening economic data and slowing inflation underscored expectations for interest-rate cuts next ye… [+5189 chars]",
            },
            {
                source: {
                    id: "reuters",
                    name: "Reuters",
                },
                author: "Reuters",
                title: "US and China remain top credit ratings to watch in 2024 - Reuters",
                description: null,
                url: "https://www.reuters.com/markets/us-china-remain-top-credit-ratings-watch-2024-2023-12-20/",
                urlToImage: null,
                publishedAt: "2023-12-20T07:34:45Z",
                content: null,
            },
            {
                source: {
                    id: "reuters",
                    name: "Reuters",
                },
                author: "Reuters",
                title: "Israel battles Hamas on streets of Gaza city as UN delays vote again - Reuters",
                description: null,
                url: "https://www.reuters.com/world/middle-east/israel-battles-hamas-streets-gaza-city-un-delays-vote-again-2023-12-20/",
                urlToImage: null,
                publishedAt: "2023-12-20T07:30:35Z",
                content: null,
            },
            {
                source: {
                    id: "al-jazeera-english",
                    name: "Al Jazeera English",
                },
                author: "Al Jazeera",
                title: "France passes tough immigration bill amid Macron party rebellion - Al Jazeera English",
                description:
                    "The new legislation includes amendments on residency and citizenship that won the approval of the far right.",
                url: "https://www.aljazeera.com/news/2023/12/20/france-passes-tough-immigration-bill-amid-macron-party-rebellion",
                urlToImage:
                    "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-12-19T223102Z_202529683_RC2M05AP23E7_RTRMADP_3_FRANCE-MIGRATION-1703050895.jpg?resize=1920%2C1440",
                publishedAt: "2023-12-20T06:04:35Z",
                content:
                    "The French parliament has passed by a wide margin an immigration bill backed by President Emmanuel Macron after a rebellion within his party over the toughened-up legislation that had secured the end… [+2768 chars]",
            },
            {
                source: {
                    id: null,
                    name: "[Removed]",
                },
                author: null,
                title: "[Removed]",
                description: "[Removed]",
                url: "https://removed.com",
                urlToImage: null,
                publishedAt: "1970-01-01T00:00:00Z",
                content: "[Removed]",
            },
            {
                source: {
                    id: "reuters",
                    name: "Reuters",
                },
                author: "Reuters",
                title: "FedEx profit misses, cuts full-year revenue forecast; shares sink - Reuters",
                description: null,
                url: "https://www.reuters.com/business/fedex-cuts-full-year-revenue-forecast-2023-12-19/",
                urlToImage: null,
                publishedAt: "2023-12-20T05:13:00Z",
                content: null,
            },
            {
                source: {
                    id: null,
                    name: "247Sports",
                },
                author: "Steve Wiltfong",
                title: "Blue-Chip Buzz: The latest on top prospects as morning of the Early Signing Period hits - 247Sports",
                description:
                    "News and notes with the three-day Early Signing Period on the horizon.",
                url: "https://247sports.com/Article/blue-chip-buzz-the-latest-on-top-prospects-with-less-than-eight-hours-till-signing-day-begins-223546672",
                urlToImage:
                    "https://s3media.247sports.com/Uploads/Assets/221/731/11731221.jpg",
                publishedAt: "2023-12-20T04:26:40Z",
                content:
                    "We are under eight hours until the three-day Early Signing Period begins and college football prospects can start putting pen to paper and locking in their respective futures. There will be many rush… [+6059 chars]",
            },
            {
                source: {
                    id: "politico",
                    name: "Politico",
                },
                author: null,
                title: "Judge orders Rep. Scott Perry to disclose 1600 messages to federal prosecutors - POLITICO",
                description:
                    "The records could help fill crucial gaps in special counsel Jack Smith’s investigation of Trump's election interference.",
                url: "https://www.politico.com/news/2023/12/19/scott-perry-ordered-to-disclose-messages-trump-00132623",
                urlToImage:
                    "https://static.politico.com/40/73/4ce3f9cb4e7c90e738b3eb0f8147/house-fbi-headquarters-06969.jpg",
                publishedAt: "2023-12-20T03:46:05Z",
                content:
                    "The records in question could help fill crucial gaps in special counsel Jack Smiths investigation. An inadvertently disclosed court document obtained last month by POLITICO revealed key aspects of th… [+2928 chars]",
            },
            {
                source: {
                    id: "business-insider",
                    name: "Business Insider",
                },
                author: "Amanda Goh",
                title: "George Clooney says being on 'Friends' didn't bring Matthew Perry joy - Business Insider",
                description:
                    "George Clooney revealed in a Deadline interview that Matthew Perry always spoke about his dream of landing a role on a sitcom when he was younger.",
                url: "https://www.businessinsider.com/george-clooney-says-friends-didnt-bring-matthew-perry-joy-2023-12",
                urlToImage:
                    "https://i.insider.com/65824b091c5c7b8c9a0a1b01?width=1200&format=jpeg",
                publishedAt: "2023-12-20T03:46:00Z",
                content:
                    'George Clooney says that starring in "Friends" didn\'t bring his longtime pal Matthew Perry "joy or happiness or peace."\r\nIn a new interview with Deadline, the 62-year-old actor opened up about his fr… [+1636 chars]',
            },
            {
                source: {
                    id: "fox-news",
                    name: "Fox News",
                },
                author: "Christine Rousselle",
                title: "Minnesota commission chooses new state flag design to replace old one deemed problematic - Fox News",
                description:
                    "Minnesota's State Emblems Redesign Commission voted 11-1 to approve a new flag design, which, pending legislative approval, will begin flying in May 2024.",
                url: "https://www.foxnews.com/lifestyle/minnesota-commission-chooses-new-state-flag-design-replace-old-deemed-problematic",
                urlToImage:
                    "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/AP23353664697824.jpg",
                publishedAt: "2023-12-20T03:37:00Z",
                content:
                    "A Minnesota commission tasked with redesigning the state's flag and seal announced its selection for the updated state flag on Dec. 19. \r\nThe State Emblems Redesign Commission voted 11-1 to approve t… [+4358 chars]",
            },
            {
                source: {
                    id: "reuters",
                    name: "Reuters",
                },
                author: "Reuters",
                title: "Trump barred from Colorado primary ballot for role in US Capitol attack - Reuters",
                description: null,
                url: "https://www.reuters.com/legal/colorado-supreme-court-disqualifies-trump-holding-office-filing-2023-12-19/",
                urlToImage: null,
                publishedAt: "2023-12-20T03:27:00Z",
                content: null,
            },
            {
                source: {
                    id: "associated-press",
                    name: "Associated Press",
                },
                author: "HANNAH FINGERHUT, ALI SWENSON",
                title: "Trump defends controversial immigrant remarks at Iowa rally - The Associated Press",
                description:
                    "Former President Donald Trump is defending his comments about migrants crossing the southern border, who he had said are poisoning the blood of America. He said at a campaign rally in Waterloo, Iowa, on Tuesday that he had not read “Mein Kampf,” referencing A…",
                url: "https://apnews.com/article/donald-trump-immigration-iowa-dff7f632948fa6511fb7d1955a28610c",
                urlToImage:
                    "https://dims.apnews.com/dims4/default/1abe429/2147483647/strip/true/crop/5386x3030+0+281/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F77%2F78%2F532f568a04d685fd80d9f94d5c6c%2F85950d13fb734af8982238decd77ca28",
                publishedAt: "2023-12-20T02:48:45Z",
                content:
                    "WATERLOO, Iowa (AP) Former President Donald Trump on Tuesday defended his comments about migrants crossing the southern border poisoning the blood of America, and he reinforced the message while deny… [+6484 chars]",
            },
            {
                source: {
                    id: null,
                    name: "The Times of Israel",
                },
                author: "The Times of Israel",
                title: "IDF probe said to find troops who killed hostages not briefed on Hebrew sign in area - The Times of Israel",
                description: null,
                url: "https://www.timesofisrael.com/idf-probe-said-to-find-troops-who-killed-hostages-not-briefed-on-hebrew-sign-in-area/",
                urlToImage: null,
                publishedAt: "2023-12-20T02:24:37Z",
                content: null,
            },
            {
                source: {
                    id: "the-hill",
                    name: "The Hill",
                },
                author: "Tara Suter",
                title: "Stephen A. Smith slams Texas immigration law as 'a disgrace,' 'inhumane' - The Hill",
                description:
                    "Sports commentator Stephen A. Smith slammed Texas’ new immigration law in a post on his account on X, the platform formerly known as Twitter, on Tuesday. “This is a disgrace. It is inhumane,” the ESPN host said in the post.  The post also featured a clip from…",
                url: "https://thehill.com/homenews/media/4368906-stephen-a-smith-slams-texas-immigration-law/",
                urlToImage:
                    "https://thehill.com/wp-content/uploads/sites/2/2023/04/StephenASmithSemafor_Getty.jpg?w=1280",
                publishedAt: "2023-12-20T02:18:00Z",
                content:
                    "Skip to content\r\nSports commentator Stephen A. Smith slammed Texas’ new immigration law in a post on his account on X, the platform formerly known as Twitter, on Tuesday.\r\n“This is a disgrace. It is … [+2256 chars]",
            },
            {
                source: {
                    id: null,
                    name: "The Athletic",
                },
                author: "Kelly Iko",
                title: "Ja Morant makes season debut, starts vs. Pelicans: What to know about his return from suspension - The Athletic",
                description:
                    "Morant was suspended for the first 25 games of the season for multiple instances of brandishing a gun in public.",
                url: "https://theathletic.com/5147182/2023/12/19/ja-morant-nba-grizzlies-return-suspension/",
                urlToImage:
                    "https://cdn.theathletic.com/app/uploads/2023/12/19201229/GettyImages-1868428512-scaled.jpg",
                publishedAt: "2023-12-20T02:02:29Z",
                content:
                    "NEW ORLEANS A few moments before Tuesday nights GrizzliesPelicans matchup, which marked Ja Morants first time back on an NBA court in more than seven months, the 24-year-old All-Star guard leaned aga… [+9857 chars]",
            },
            {
                source: {
                    id: null,
                    name: "YouTube",
                },
                author: null,
                title: "Iceland volcano erupts in country's most populated area - FOX 11 Los Angeles",
                description: null,
                url: "https://www.youtube.com/watch?v=UEoCgSib0hU",
                urlToImage: null,
                publishedAt: "2023-12-20T01:57:22Z",
                content:
                    "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
            },
            {
                source: {
                    id: null,
                    name: "ScienceAlert",
                },
                author: "Business Insider",
                title: "Hold Onto Your Hats: JWST Unveils Unprecedentedly Crisp View of Uranus And Its Rings - ScienceAlert",
                description:
                    "NASA's James Webb Space Telescope has done it again.",
                url: "https://www.sciencealert.com/hold-onto-your-hats-jwst-unveils-unprecedentedly-crisp-view-of-uranus-and-its-rings",
                urlToImage:
                    "https://www.sciencealert.com/images/2023/12/jwst-uranus-20-dec-32.jpeg",
                publishedAt: "2023-12-20T01:27:02Z",
                content:
                    "NASA's James Webb Space Telescope has done it again.\r\nAn enhanced image from the high-powered telescope orbiting in space shows the planet Uranus in stunning new detail.\r\nThe photo captures the icy b… [+2250 chars]",
            },
            {
                source: {
                    id: "cbs-news",
                    name: "CBS News",
                },
                author: "Natalie Duddridge",
                title: "N.Y. Gov. Kathy Hochul signs controversial legislation to create slavery reparations commission - CBS New York",
                description:
                    "Hochul said she knows many New York residents do not support it, but added it had to be signed.",
                url: "https://www.cbsnews.com/newyork/news/gov-kathy-hochul-signs-controversial-legislation-to-create-slavery-reparations-commission/",
                urlToImage:
                    "https://assets2.cbsnewsstatic.com/hub/i/r/2023/12/19/023fe058-c3dc-477b-ae47-f404481203b6/thumbnail/1200x630/f6ae5c6ed47c977997103c6b862bb9c6/duddridge-12-image-720.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
                publishedAt: "2023-12-20T01:26:00Z",
                content:
                    "NEW YORK -- Gov. Kathy Hochul signed historic racial justice legislation on Tuesday, creating a committee to consider reparations for slavery.\r\nThe new law authorizes the creation of a community comm… [+2845 chars]",
            },
            {
                source: {
                    id: "ign",
                    name: "IGN",
                },
                author: "Alex Stedman",
                title: "Suicide Squad: Kill the Justice League's Epic Games Store Release Delayed to March - IGN",
                description:
                    "The Epic Games Store release for Suicide Squad: Kill the Justice League has been delayed to March, while all other storefronts remain on track for Feb. 2.",
                url: "https://www.ign.com/articles/suicide-squad-kill-the-justice-leagues-epic-games-store-release-delayed-to-march",
                urlToImage:
                    "https://assets-prd.ignimgs.com/2023/12/08/suicide-squad-1702002302912.jpg?width=1280",
                publishedAt: "2023-12-20T00:50:36Z",
                content:
                    "Suicide Squad: Kill the Justice League has been delayed on just one storefront: Epic Games Store.\r\nThe highly anticipated Arkham game will now debut on Epic Games Store on March 5, 2024, a community … [+1569 chars]",
            },
            {
                source: {
                    id: "cbs-news",
                    name: "CBS News",
                },
                author: "Tucker Reals",
                title: "Who are the Houthi rebels? What to know about the Yemeni militants attacking ships in the Red Sea - CBS News",
                description:
                    "What to know about the Houthi rebel movement, an Iran-backed group that controls much of Yemen, as it attacks ships in the Red Sea.",
                url: "https://www.cbsnews.com/news/who-are-houthi-rebels-what-to-know-yemen-militants-attack-ships-red-sea/",
                urlToImage:
                    "https://assets2.cbsnewsstatic.com/hub/i/r/2022/10/06/b0373bc4-407d-4daa-b26f-29d89b429d2b/thumbnail/1200x630/b43c8e29cc07323536553d9a03dd5354/houthi-yemen-ap22278622673883.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
                publishedAt: "2023-12-20T00:42:00Z",
                content:
                    "For weeks, Houthi rebels in Yemen have launched drone and rocket attacks targeting ships in the Red Sea and the Bab al-Mandab Strait, a strategic passage that connects the Red Sea and the Arabian Sea… [+6903 chars]",
            },
        ],
    };


    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const updateNews = async () => {
        props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(75);
        if (
            parsedData.code === "rateLimited" ||
            parsedData.code === "corsNotAllowed"
        ) {
            setArticles(demoData.articles);
            setTotalResults(demoData.totalResults);
            setLoading(false);
            props.setProgress(100);
        } else {
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            props.setProgress(100);
        }
    };

    useEffect(() => {
        document.title = `NewsMonkey - ${capitalize(props.category)}`;
        updateNews(); // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${
            props.country
        }&page=${page + 1}&category=${props.category}&apiKey=${
            props.apikey
        }&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        if (parsedData.code === "rateLimited" || parsedData.code === "corsNotAllowed") {
            setArticles(articles.concat(demoData.articles));
            setTotalResults(demoData.totalResults);
            setLoading(false);
            props.setProgress(100);
        } else {
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
            setLoading(false);
        }
        
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: "30px" }}>
                NewsMonkey - Top {capitalize(props.category)} Headlines
            </h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length <= totalResults}
                loader={loading && <Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <NewsItem
                                        title={
                                            element.title
                                                ? element.title.slice(0, 70)
                                                : element.title
                                        }
                                        description={
                                            element.description
                                                ? element.description.slice(
                                                      0,
                                                      150
                                                  )
                                                : element.description
                                        }
                                        imageURL={
                                            element.urlToImage
                                                ? element.urlToImage
                                                : placeholder
                                        }
                                        newsURL={element.url}
                                        author={
                                            element.author
                                                ? element.author
                                                : "Unknown"
                                        }
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};
News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
export default News;
