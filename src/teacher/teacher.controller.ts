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
    

 }