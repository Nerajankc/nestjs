import {Controller , Get, Put  } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
 export class TeacherStudentController {

 @Get()
 getTeacherStudentId()
 {
     return "All teacher's students ";
 }

 @Put('/:studentId')
 editTeacherStudentId(){
     return " All teacher alogn with student updated"

 }
}
