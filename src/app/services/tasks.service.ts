import { Injectable } from '@angular/core';
import ITask from 'src/assets/scripts/interfaces/ITasks';

@Injectable({ providedIn: 'root' })
export class Tasks {
  public Tasks: ITask[] = [
    {
      title: 'frontend development',
      description: 'developing and Improving UI/UX design',
      isReminded: true,
      date: 'Jan. 3, 2023',
    },
    {
      title: 'backend development',
      description:
        'optimizing and improving security features and access controls',
      isReminded: true,
      date: 'Feb. 9, 2023',
    },
    {
      title: 'database management',
      description:
        'managing data and creating pipelines for analyzing, processing and transmission of data',
      isReminded: false,
      date: 'Apr. 18, 2023',
    },
  ];
}
