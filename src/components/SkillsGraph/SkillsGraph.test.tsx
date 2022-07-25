import { Edge, Node } from "react-flow-renderer";
import { toEdges } from "./toEdges";
import { toNodes } from "./toNodes";

describe("edges", () => {
  it("Given a list of Skills, creates an array of Edge[]", () => {
    const twoSkills = [
      {
        id: "adding_single_digit_positive_integers",
        title: "Adding single-digit positive integers",
        mental_representations: [
          "# John has some beans\n\nThere once was a boy named John.",
        ],
        prereqs: [],
      },
      {
        id: "adding_double_digit_positive_integers",
        title: "Adding double-digit positive integers",
        mental_representations: [
          "# John has some beans\n\nThere once was a boy named John.",
        ],
        prereqs: ["adding_single_digit_positive_integers"],
      },
    ];

    const expectedEdges: Edge[] = [
      {
        id: "adding_single_digit_positive_integers->adding_double_digit_positive_integers",
        source: "adding_single_digit_positive_integers",
        target: "adding_double_digit_positive_integers",
      },
    ];

    expect(toEdges(twoSkills)).toMatchObject(expectedEdges);
  });
});

describe("nodes", () => {
  it("Given a list of Skills, creates an array of Node[]", () => {
    const twoSkills = [
      {
        id: "adding_single_digit_positive_integers",
        title: "Adding single-digit positive integers",
        mental_representations: [
          "# John has some beans\n\nThere once was a boy named John.",
        ],
        prereqs: [],
      },
      {
        id: "adding_double_digit_positive_integers",
        title: "Adding double-digit positive integers",
        mental_representations: [
          "# John has some beans\n\nThere once was a boy named John.",
        ],
        prereqs: ["adding_single_digit_positive_integers"],
      },
    ];

    const expectedNodes: Node[] = [
      {
        id: "adding_single_digit_positive_integers",
        position: { x: 0, y: 0 },
        data: { title: "Adding single-digit positive integers" },
      },
      {
        id: "adding_double_digit_positive_integers",
        position: { x: 0, y: 0 },
        data: { title: "Adding double-digit positive integers" },
      },
    ];

    expect(toNodes(twoSkills)).toMatchObject(expectedNodes);
  });
});
