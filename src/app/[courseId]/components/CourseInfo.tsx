"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courseList } from "@/constants/courses";
import { Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseInfo = ({ courseName }: { courseName: string }) => {
  const course = courseList[courseName];
  const handleEnrollNowClick = () => {
    window.open("https://api.whatsapp.com/send?phone=9641118267", "_blank");
  };
  return (
    <div className="p-4 border-1 border-gray-300 rounded-lg space-y-4">
      <div className="flex justify-end gap-2">
        <Badge variant="secondary">
          {course.isLive && <Radio size={16} className="text-red-600 mr-2" />}
          {course.isLive ? "Live" : "Upcoming"}
        </Badge>

        {course.onHold && <Badge variant="destructive">On Hold</Badge>}
      </div>

      <div>
        <div className="w-fit h-10">
          <Image
            src={course.imagePath || ""}
            alt={course.title ? `${course.title} course image` : "Course image"}
            width={100}
            height={100}
            className="h-full w-full"
          />
        </div>

        <h1 className="py-2 font-semibold text-2xl sm:text-3xl md:text-4xl">
          {course.title}
        </h1>

        <p className="text-sm sm:text-base text-gray-900">
          {course.description}
        </p>
      </div>

      <div className="space-y-1">
        <p className="text-sm space-x-2">
          Instructor(s):{" "}
          {course.instructors.length ? (
            course.instructors.map((instructor) => (
              <Link
                href={instructor.github || "https://github.com"}
                key={instructor.id}
                className="font-medium"
              >
                {instructor.name}
              </Link>
            ))
          ) : (
            <span className="font-medium">Not assigned yet</span>
          )}
        </p>

        <p className="text-sm">
          Medium: <span className="font-medium">{course.medium}</span>
        </p>
      </div>

      <Button
        variant="orange"
        onClick={handleEnrollNowClick}
        disabled={!course.isLive}
        type="button"
      >
        Enroll Now
      </Button>
    </div>
  );
};

export default CourseInfo;
