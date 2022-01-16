import {Controller , Get , Post, Put  } from '@nestjs/common';

@Controller('students')
 export class StudentController {
     @Get()
     getStudent()
     {
         return "All studentsss";
     }

     @Get('/:studentsId')
     getStudentId()
     {
         return "student id";
     }
    
    @Post()
    createStudent()
    {
        return " student created scuessfully";
    }

    @Put('/:studentsId')
    editStudentId()
    {
        return " updated student info wise id ";
    }



 }