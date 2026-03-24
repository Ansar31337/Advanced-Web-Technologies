import { EnrollmentService } from '../enrollment/enrollment.service';
export declare class NotificationService {
    private readonly enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    sendNotification(studentName: string, message: string): {
        message: string;
    };
    checkEnrollmentAndNotify(studentName: string, courseId: string): {
        message: string;
        enrollments: {
            message: string;
            data: never[];
        };
    };
}
