export default function WorkExperience() {
    return (
      <section className="py-20 px-6 max-w-4xl mx-auto dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
  
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold">TLP Senior Associate @ Vanguard</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2024 – Present | Charlotte, NC</p>
            <ul className="list-disc pl-5 mt-2 text-left">
              <li>Redesigned a Daily Portfolio Management (DPM) tool for 30+ stakeholders handling 800K+ transactions.</li>
              <li>Led accessibility testing via Cypress and NVDA, raising compliance from ~60% to 100%.</li>
              <li>Built AWS Lambda + DynamoDB dashboard to auto-log errors and reduce Jira ticket resolution time by 35%.</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Associate Software Engineer @ EduAvenues</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Dec 2022 – Present | Fairfax, VA</p>
            <ul className="list-disc pl-5 mt-2 text-left">
              <li>Built OpenAI-integrated Flask platform to review 26K+ essays, cutting manual review by 65%.</li>
              <li>Developed Python data pipeline for 1K+ student reports using Google APIs; 88% time saved.</li>
              <li>Engineered proctoring dashboard for 200+ users; reduced instructor load by 50%.</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Software Engineer Intern @ Workiva (NYSE: WK)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">May 2023 – May 2024 | Remote</p>
            <ul className="list-disc pl-5 mt-2 text-left">
              <li>Migrated legacy UI to MUI with Dart, React, Redux; improved load speeds and performance.</li>
              <li>Added search + filtering for dependency tracking; 25% faster engineer productivity.</li>
              <li>Refactored SaaS platform into micro-frontends to reduce merge conflicts by ~40%.</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Software Engineer Intern @ ST Engineering iDirect</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">May 2022 – Aug 2022 | Herndon, VA</p>
            <ul className="list-disc pl-5 mt-2 text-left">
              <li>Automated QoS profile setup using Python + Jenkins; cut manual steps by 75%.</li>
              <li>Wrote Python scripts to back up 10+ network nodes; reduced risks and manual recovery effort by 85%.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  