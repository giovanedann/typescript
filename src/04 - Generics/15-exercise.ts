type VotationOptions = {
  numberOfVotes: number;
  option: string;
}

export class Votation {
  private _votationOptions: VotationOptions[] = [];

  constructor(
    public message: string
  ) {}

  addVotationOption(votationOption: VotationOptions): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOptions[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = []; 

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.message);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option);
        console.log(votationOption.numberOfVotes);
      }
    }
  }
}

const votation1 = new Votation('What is your favorite programming language?');
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0});
votation1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0});
votation1.addVotationOption({ option: 'TypeScript', numberOfVotes: 0});

votation1.vote(0);
votation1.vote(0);

votation1.vote(1);
votation1.vote(1);
votation1.vote(1);

votation1.vote(2);
votation1.vote(2);
votation1.vote(2);
votation1.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();