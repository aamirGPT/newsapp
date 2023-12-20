import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import placeholder from "../images/placeholder.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const demoData = {
        status: "ok",
        totalResults: 36,
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
        if (parsedData.code === 'rateLimited') {
            setArticles(demoData.articles);
            setTotalResults(demoData.totalResults);
            setLoading(false);
            props.setProgress(100);
        }
        else {
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
        if (parsedData.code === "rateLimited") {
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
