import Index from "@/content/home.mdx";

export default function Home() {
  return (
    <main>
      <div className="mx-auto w-1/2">
        <main>
          {/*<Headshot client:load />*/}
          <div className="block mx-auto mt-2 text-center">
            <span className="socials block mx-auto inline-flex justify-between space-x-2">
              <a href="https://github.com/remainstheday">
                <img src="/logo-github.svg" width="25" height="25" />
              </a>
              <a href="https://www.linkedin.com/in/trentonk/">
                <img src="/logo-linkedin.svg" width="25" height="25" />
              </a>
              <a href="https://instagram.com/@kennedy_trenton">
                <img src="/logo-instagram.svg" width="25" height="25" />
              </a>
            </span>
          </div>
          <h1>
            <span className="text-gradient">Trenton Kennedy</span> is a software
            developer at Oracle working on cloud applications. Outside the
            office he spends his time practicing new sports, going on road
            trips, and taking things apart to learn how they work.
          </h1>

          <div className="projects mt-12">
            <h2 className="font-bold text-2xl mb-4">Projects</h2>
            <div className="space-y-6 sm:space-y-0 sm:flex sm:flex-row justify-between mb-16">
              <img
                src="/logly-screenshots.png"
                className="border border-gray-400"
                width="150"
                height="150"
              />
              <div className="w-full sm:w-2/3">
                <h3 className="font-bold">LOGLY</h3>
                <p>
                  A platform that platform enables cultural institutions to
                  easily build digital guides and instantly create immersive
                  experiences for guests. This project was developed by yours
                  truly using React.js, Node.js, & PostgresQL.
                </p>
                <a
                  className="underline underline-offset-2 text-blue-600"
                  href="https://logly.world"
                >
                  https://logly.world
                </a>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-0 sm:flex sm:flex-row justify-between mb-16">
              <img
                src="/endurance-results-screenshot.png"
                className="border border-gray-400"
                width="150"
                height="150"
              />
              <div className="w-full sm:w-2/3">
                <h3 className="font-bold">Endurance Results</h3>
                <p>
                  During my time working on{" "}
                  <a
                    className="underline underline-offset-2 text-blue-600"
                    href="https://www.stjude.org/"
                  >
                    stjude.org
                  </a>{" "}
                  I led a small team tasked with building a real time webpage
                  which loaded Marathon race results. Prior to this the race
                  results were loaded on a PDF days after the race which was not
                  easy to read on mobile and lacked critical features such as
                  search.
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-0 sm:flex sm:flex-row justify-between mb-16">
              <img
                src="/redkix-screenshot.png"
                className="border border-gray-400"
                width="150"
                height="150"
              />
              <div className="w-full sm:w-2/3">
                <h3 className="font-bold">Redkix</h3>
                <p>
                  This was a real time chat application that integrated with
                  corporate email. My job included writing plain HTML, CSS &
                  Javascript to build the custom website and email newsletters.
                  In 2018 Redkix was purchased by Facebook, and I've been
                  kicking myself ever sense for not taking the full time job
                  offer.
                </p>
                <a
                  className="underline underline-offset-2 text-blue-600"
                  href="https://www.dailymail.co.uk/sciencetech/facebook/article-6007401/Facebook-buys-Redkix-hopes-Workplace-rival-Slack.html"
                >
                  {" "}
                  Press Release
                </a>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-0 sm:flex sm:flex-row justify-between mb-16">
              <img
                src="/sonicscoop-screenshot.png"
                className="border border-gray-400"
                width="150"
                height="150"
              />
              <div className="w-full sm:w-2/3">
                <h3 className="font-bold">Sonicscoop</h3>
                <p>
                  This was the coolest online community to work with. In 2016
                  The creators of{" "}
                  <a href="https://sonicscoop.com/">sonicscoop.com</a> reached
                  out wanting to create a recommendation algorithm for their
                  content and to develop a forum for audiophiles. This was built
                  entirely on Wordpress with custom plugins written in PHP &
                  Javascript.
                </p>
                <a
                  class="underline underline-offset-2 text-blue-600"
                  href="https://sonicscoop.com/"
                >
                  https://sonicscoop.com
                </a>
              </div>
            </div>
          </div>
          <section class="my-12">
            <h2 class="font-bold text-lg mb-4">Experience</h2>
            {/*<div class="w-full space-x-6 sm:space-x-12">*/}
            {/*  <img*/}
            {/*    class="inline-block w-[100px] sm:w-[144px]"*/}
            {/*    src="/oracle-logo.png"*/}
            {/*  />*/}
            {/*  <img*/}
            {/*    class="inline-block w-[50px] sm:w-[50px]"*/}
            {/*    src="/stjude-logo.jpg"*/}
            {/*  />*/}
            {/*  <img*/}
            {/*    class="inline-block w-[30px] sm:w-[50px]"*/}
            {/*    src="/Twitter-Logo.png"*/}
            {/*  />*/}
            {/*  <img*/}
            {/*    class="inline-block w-[100px] sm:w-[144px]"*/}
            {/*    src="/ogilvy-logo.png"*/}
            {/*  />*/}
            {/*</div>*/}
          </section>
        </main>
      </div>
    </main>
  );
}
