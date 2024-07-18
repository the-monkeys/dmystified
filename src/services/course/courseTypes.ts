export interface Course {
  id: string;
  cname: string;
  title: string;
  description: string;
  imagePath: string;
  isLive: boolean;
  onHold: boolean;
  createdAt: Date;
  updatedAt: Date;
}
