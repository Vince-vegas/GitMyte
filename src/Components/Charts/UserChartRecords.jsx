/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import GhPolyglot from 'gh-polyglot';
import '../../Styles/charts.scss';
import { withRouter } from 'react-router-dom';
import { useRef } from 'react';
import ChartLoading from './ChartLoading';

const pieOpt = {
  legend: { position: 'right' },
  responsive: true,
  maintainAspectRatio: true,
};

const UserChartRecords = (props) => {
  const [repoStar, setRepoStar] = useState({});
  const [barChart, setBarChart] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const requestingRepos = useRef(true);

  useEffect(() => {
    const queryStr = new URLSearchParams(props.location.search);
    const getName = queryStr.get('name');

    let githubUser = new GhPolyglot(getName);

    githubUser.userStats(function (err, stats) {
      let langStatsNames = [];
      let langStatsData = [];
      let langStatsColor = [];
      stats.forEach((item) => {
        langStatsNames.push(item.label);
        langStatsData.push(item.value);
        langStatsColor.push(item.color);
      });

      if (requestingRepos.current) {
        setRepoStar({
          labels: langStatsNames,
          datasets: [
            {
              label: 'Github Repo',
              data: langStatsData,
              backgroundColor: langStatsColor,
            },
          ],
        });
      }
    });

    // Get All Repos
    githubUser.getAllRepos(function (err, stats) {
      let repoStar = [];
      let repoName = [];
      stats
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .forEach((item, index) => {
          if (index < 7) {
            repoStar.push(item.stargazers_count);
            repoName.push(item.name);
          }
        });

      if (requestingRepos.current) {
        setBarChart({
          labels: repoName,
          datasets: [
            {
              data: repoStar,
              backgroundColor: 'rgb(0, 143, 251)',
            },
          ],
        });
        setIsLoading(false);
      }
    });

    return () => {
      // To prevent a leak on RAM
      requestingRepos.current = false;
    };
  }, []);

  return (
    <>
      <section className="mn-charts">
        <div className="lg-container">
          <div className="chart-holder">
            {isLoading && <ChartLoading />}

            {'datasets' in repoStar && (
              <div className="row justify-center">
                <div className="chart-item pie-chart">
                  <h1>Most Used Languages</h1>
                  <Pie
                    data={repoStar}
                    options={pieOpt}
                    height={200}
                    width={200}
                  />
                </div>

                <div className="chart-item bar-chart">
                  <h1>Most Starred Repo</h1>
                  <Bar
                    data={barChart}
                    options={{
                      legend: { display: false },
                      responsive: true,
                      maintainAspectRatio: true,
                    }}
                    height={250}
                    width={300}
                  />
                </div>
              </div>
              //
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(UserChartRecords);
