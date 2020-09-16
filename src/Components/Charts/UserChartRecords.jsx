import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import GhPolyglot from 'gh-polyglot';
import '../../Styles/charts.scss';

const UserChartRecords = () => {
  const [repoStar, setRepoStar] = useState({
    labels: ['repo 1', 'repo 2'],
    datasets: [
      {
        label: 'Github Repo',
        data: [250, 500],
        backgroundColor: ['#3498db', '#e74c3c'],
      },
    ],
  });

  const [barChart, setBarChart] = useState({
    labels: ['test 1', 'test 2', 'test 3', 'test 4', 'test 5'],
    datasets: [
      {
        label: 'barCharts',
        data: [2000, 900, 500, 300, 100],
        backgroundColor: '#008ffb',
      },
    ],
  });

  //   useEffect(() => {
  //     let githubUser = new GhPolyglot('lydiahallie');

  //     githubUser.userStats(function (err, stats) {
  //       console.log('userStats', err || stats);

  //       let langStatsNames = [];
  //       let langStatsData = [];
  //       let langStatsColor = [];

  //       stats.forEach((item) => {
  //         langStatsNames.push(item.label);
  //         langStatsData.push(item.value);
  //         langStatsColor.push(item.color);
  //       });

  //       console.log(langStatsNames);
  //       console.log(langStatsData);
  //       console.log(langStatsColor);

  //       setRepoStar({
  //         labels: langStatsNames,
  //         datasets: [
  //           {
  //             label: 'Github Repo',
  //             data: langStatsData,
  //             backgroundColor: langStatsColor,
  //           },
  //         ],
  //       });
  //     });

  //     // Repos
  //     githubUser.getAllRepos(function (err, stats) {
  //       console.log('Repo', err || stats);

  //       let repoStar = [];
  //       let repoName = [];

  //       stats
  //         .sort((a, b) => b.stargazers_count - a.stargazers_count)
  //         .forEach((item, index) => {
  //           if (index < 7) {
  //             repoStar.push(item.stargazers_count);
  //             repoName.push(item.name);
  //           }
  //         });

  //       console.log(repoStar);
  //       console.log(repoName);

  //       setBarChart({
  //         labels: repoName,
  //         datasets: [
  //           {
  //             label: 'barCharts',
  //             data: repoStar,
  //             backgroundColor: 'rgb(0, 143, 251)',
  //           },
  //         ],
  //       });
  //     });
  //   }, []);

  return (
    <section className="mn-charts">
      <div className="lg-container">
        <div className="chart-holder">
          <div className="row justify-center align-center">
            <div className="w-90 col-sm-4 chartpie">
              <Pie
                data={repoStar}
                options={{ legend: { position: 'right' }, responsive: true }}
              />
            </div>
            <div className="w-90 col-sm-4">
              <Bar
                data={barChart}
                options={{ legend: { display: false }, responsive: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserChartRecords;
