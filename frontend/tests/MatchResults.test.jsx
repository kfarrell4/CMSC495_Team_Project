import {
  render,
  screen
} from "@testing-library/react";

import {
  describe,
  expect,
  test
} from "vitest";

import "@testing-library/jest-dom";

import MatchResults
  from "../src/components/MatchResults";


describe(
  "MatchResults",
  () => {

    test(
      "displays the match score",
      () => {

        render(
          <MatchResults
            result={{
              match_score: 85,

              matched_skills: [
                "Python",
                "SQL"
              ],

              missing_skills: [
                "Docker"
              ],

              explanation:
                "Strong skill overlap."
            }}
          />
        );

        expect(
          screen.getByText("85%")
        ).toBeInTheDocument();

      }
    );


    test(
      "displays matched skills",
      () => {

        render(
          <MatchResults
            result={{
              match_score: 85,

              matched_skills: [
                "Python",
                "SQL"
              ],

              missing_skills: [],

              explanation:
                "Strong skill overlap."
            }}
          />
        );

        expect(
          screen.getByText("Python")
        ).toBeInTheDocument();

        expect(
          screen.getByText("SQL")
        ).toBeInTheDocument();

      }
    );


    test(
      "displays skill gaps",
      () => {

        render(
          <MatchResults
            result={{
              match_score: 70,

              matched_skills: [
                "Python"
              ],

              missing_skills: [
                "Docker"
              ],

              explanation:
                "Candidate has relevant skills."
            }}
          />
        );

        expect(
          screen.getByText("Docker")
        ).toBeInTheDocument();

      }
    );


    test(
      "displays recommendation explanation",
      () => {

        render(
          <MatchResults
            result={{
              match_score: 90,

              matched_skills: [
                "Python",
                "SQL"
              ],

              missing_skills: [],

              explanation:
                "Candidate strongly matches the position."
            }}
          />
        );

        expect(
          screen.getByText(
            "Candidate strongly matches the position."
          )
        ).toBeInTheDocument();

      }
    );

  }
);