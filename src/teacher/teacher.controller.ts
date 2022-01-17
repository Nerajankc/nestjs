import {Controller , Get, Param, Put , } from '@nestjs/common';
import { } from '../teacher/dto/teacher.dto';

@Controller('teachers')
 export class TeacherController {
     @Get()
     getTeacher() :  FindTeacherResponseDto[]
     {
         return "All ff teacher";
     }

     @Get('/:teacherId')
     getTeacherId(@Param ("teacherId") teacherId : string) :  FindTeacherResponseDto
     {
         return "Al dddl teacher";
     }
    

 }