export interface IAppState {
  [key: string]: number;
}

export interface IFeedbackProps {
  options: string[];
  onLeaveFeedback: (option: string) => void;
}

export interface INotification {
  message: string;
}

export interface ISection {
  title: string;
  children: React.ReactNode;
}

export interface IStats {
  totalFeedback: number;
  positiveFeedbackPercentage: number;
  good: number;
  neutral: number;
  bad: number;
}

export interface IFeedback {
  children: React.ReactNode;
}
