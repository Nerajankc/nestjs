import {Controller , Get, Put  } from '@nestjs/common';

@Controller('teachers')
 export class TeacherController {
     @Get()
     getTeacher()
     {
         return "All ff teacher";
     }

     @Get('/:teacherId')
     getTeacherId()
     {
         return "Al dddl teacher";
     }
     
     @Get('/:teacherId/students')
     getTeacherStudentId()
     {
         return "All teacher's students ffffffff";
     }

     @Put('/:teacherId/students/:studentId')
     editTeacherStudentId(){
         return " All teacher alogn with student updated"

     }

 }