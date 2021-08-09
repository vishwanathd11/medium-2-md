const obj = [
    {
      title: "To Scale In Or Scale Out? Here's How We Scale at Dream11",
      summary:
        'For the 100 million Dream11 users, the thrill and excitement of playing fantasy sports on our platform is unparalleled. They enjoy creating their own teams and competing with fellow fans and friends! However, from a backend perspective, there are various challenges we face in terms of variation in traffic and engagement on Dream11 majorly before the match start time. ',
      tags: ['DevOps', 'Data Science', 'Scale', 'AWS', 'Microservices'],
    },
    {
      tags: ['Performance', 'SDET'],
      summary:
        'IPL witnesses huge fan following, so it is a defining event for us at Dream11. During Dream11 IPL 2020, we served an enormous amount of traffic. With more than 5.5 million concurrent users enjoying the fantasy sports experience, some of the services get more than 80 million requests per minute. The ultimate challenge is to provide our users ',
      title: 'Finding Order in Chaos: How We Automated Performance Testing with Torque',
    },
    {
      tags: ['SDET'],
      summary:
        'Cricket, as a sport, is worshipped in our country. 2020 was a trying time for everyone and sports had come to a halt for almost 4 to 5 months. The **Indian Premier League (IPL) 2020 came as a much-needed welcome change for Indian sports fans. Fans celebrated the magnanimity of IPL and also increased their engagement with the matches by participating in Dream11 fantasy sports contests, which ',
      title: 'Maintaining hyper-sonic releases at Dream11',
    },
    {
      tags: ['Security'],
      summary:
        "At Dream11, keeping our users' data safe and secure is of primary importance. Users trust us with their information and we go above and beyond to provide the best possible online fantasy sports experience to them while they enjoy their favourite sports. At Dream11, we use S3 buckets. They are an integral part of our cloud computing processes and data storage which are accessed by all tech and non-tech teams with appropriate permissions. But what are S3 buckets?",
      title: 'Enhancing Cloud Security With Real-Time S3 Alerts at Dream11',
    },
    {
      tags: ['Micro Frontend', 'React'],
      summary:
        'When starting a new project, most technology teams begin with a single frontend repository. This worked very well for us at Dream11 too, when our tech team was small in the early stages of projects. But as the team grew, maintaining our content management system (CMS) became more and more difficult. With a growing team, making work processes as seamless as possible to deliver high performance was a priority, so we identified problematic bottlenecks and reinvented our way of work when it came to our CMS application ',
      title: 'How To Convert a Huge Frontend Monolith to a Micro-frontend',
    },
    // --------------
    {
      tags: ['Big Data', 'Scale', 'Cassandra', 'Spark', 'Distributed Systems'],
      title: 'Leaderboard @Dream11',
      summary:
        'Our Leaderboard has already served 1 million requests per minute, serving 250k concurrent users at its peak. As our user base grows, we expected the request pattern to grow by a much larger magnitude. So, we needed to design a system that would linearly scale as our traffic increases. It should be able to crunch gigabytes of data using distributed sorting within a SLA (Service Level Agreement) of under a minute, while maintaining strong consistency of different user views across multiple platforms. The persistent systems used should support millions of input/output operations per second, while maintaining throughput and latency under the strict SLA desired.This is done to ensure that our users have a seamless experience across platforms and devices at all times.',
    },
    {
      tags: ['Hackathons', 'Tech', 'Technology', 'Fantasy'],
      title: 'Dream11 Hackathon 2017: Building trust, one idea at a time',
      summary:
        "Trust and transparency have always been (and will always be) the cornerstones of what makes Dream11 a great product and a great organisation. When we're not busy creating a strong, positive work culture and a killer product, we spend our time and energy in trying to figure out the answer to a single question: How do we build more trust among our users (and Dreamsters too)?",
    },
    {
      title: 'A Journey to Insightful Data',
      summary:
        'Big Data is much more than simply a matter of size — it presents an opportunity to discover key insights and emerging trends in data, makes businesses more agile, board room decisions better informed, and answer questions that have previously been considered unanswerable. With all the hype around big data, insightful data is eventually most important to business.',
      tags: ['Big Data', 'Data', 'Analytics', 'Data Warehouse', 'Tech'],
    },
    {
      title: 'Dream11 Android Application Architecture',
      summary:
        'Over the years, mobile application developers have experimented with various standard architecture patterns like Model View Controller (MVC), Model View Presenter (MVP), Model View ViewModel (MVVM), and clean architecture et al. These patterns need improvisations to implement it for specific requirements of the mobile app. While designing the architecture, the first step is to identify and state the objectives. Below were the objectives identified by us:',
      tags: [
        'Android',
        'Mobile App Development',
        'Android App Development',
        'Mobile Apps',
        'Clean Architecture',
      ],
    },
    {
      title: 'ElasticSearch Dream11',
      summary:
        "Scale to serve over 500,000+ events per second, 5 TB+ ingestion capacity and provide logging, search for micro services, security analytics along with anomaly detection 'Elasticsearch as a Service' for our microservices , security, data services logging and analytics needs in the face of high events frequency and data ingestion requirements_",
      tags: ['Elasticsearch'],
    },
    {
      title: 'DATA is the New OIL: Mine it Well to Tap your Customers in Real-Time',
      summary:
        'Data is the new oil…only if you can reach meaningful insights out of it. Getting the most relevant insights in the fastest possible way, makes a business stand apart from the crowd. In other words, reliability and speed are the two key metrics when it comes to assessing the quality of insights. However, with growth in user base and resultant data, supporting deep analytics at a large scale becomes a challenge.',
      tags: ['Big Data', 'Dream11'],
    },
    {
      title: 'Building Scalable Real Time Analytics, Alerting and Anomaly Detection',
      summary:
        'Building batch data analytics platform traditionally is not a new trend. While the industry is moving towards agile and shorter development cycles, scope of building data platform is no more limited to batch processing. Businesses aim for real time updates on-the-go. No one wants to know something that has broken after an hour.',
      tags: ['Big Data', 'Dream11', 'Real Time Analytics'],
    },
    {
      title: "Data Highway — Dream11's Inhouse Analytics Platform — The Burden and Benefits",
      summary:
        'With a whopping 40 million RPM, 2.5 million user concurrency, it is all about capturing and crunching the data of the 3 billion daily events that we receive, owing to data collection of ~4.5 TB per day. In the current data driven world, how fair is to expect a company to count on a single data tool to fulfill business and data requirements!!?',
      tags: ['Inhouse Analytics', 'Sports Data', 'Data Engineering', 'Dream11', ' Dream11 Data'],
    },
    {
      title: 'How does Dream11 serve millions of Personalised Contests in a match',
      summary:
        'At a time when we are collectively homebound, thanks to the pandemic, the Dream11 Indian Premier League (IPL) 2020 came like a breath of fresh air for cricket fans everywhere. Not only did the **Dream11 IPL 2020** fill an otherwise gaping void in the realm of sports this year, but it also kept our passion for cricket, a thread that binds us together, burning as brightly as ever.',
      tags: ['Dream11', 'Distributed Systems', 'Sharding', 'Scale'],
    },
  ]

module.exports = obj