import NumberNode from '../../utils/NumberNode.js';

const first = (input: string) => {
  const  {allRules, updates} = splitInput(input);
  console.log(allRules);
  console.log(updates);

  return 'solution 1';
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };


function splitInput(input:string) {
  const [ruleSet, updateSet]: string[] = input.split('\n\n');
  const allRules = new UpdateRules();
  ruleSet.split('\n').forEach((line: string) => allRules.addRule(line));
  const updates = updateSet.split('\n').map((line: string) => line.split(','));
  return {allRules, updates};

}

class UpdateRules {
  private rules: Map<number, NumberNode> = new Map<number, NumberNode>();

  constructor() {}

  addRule(ruleText: string): void {
    const [before, after] = ruleText.split('|').map(value => parseInt(value));
    const beforeNode = this.getRule(before);
    const afterNode = this.getRule(after);

    beforeNode.postRule(afterNode);
    afterNode.preRule(beforeNode);
  }

  getRule(ruleNumber: number): NumberNode {
    if (!this.rules.has(ruleNumber)) {
      console.log('Adding rule for ', ruleNumber);
      this.rules.set(ruleNumber, new NumberNode(ruleNumber));
    }
    return this.rules.get(ruleNumber);
  }
}
