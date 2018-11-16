export enum ActivityLevel {
  Sedentary = 1.2,
  LightlyActive = 1.375,
  ModeratelyActive = 1.55,
  VeryActive= 1.725,
  ExtremelyActive= 1.9
}


export const ActivityLevelOptions = [
  {
    text: 'Sedentary',
    value: ActivityLevel.Sedentary
  },
  {
    text: 'Lightly Active',
    value: ActivityLevel.LightlyActive
  },
  {
    text: 'Moderately Active',
    value: ActivityLevel.ModeratelyActive
  },
  {
    text: 'Very Active',
    value: ActivityLevel.VeryActive
  },
  {
    text: 'Extremely Active',
    value: ActivityLevel.ExtremelyActive
  }
];
