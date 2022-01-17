import {Controller , Get , Post, Put , Param , Body } from '@nestjs/common';
import { json } from 'stream/consumers';
import { CreateStudentDto , UpdateStudentDto , FindStudentResponseDto , StudentResponseDto } from './student.dto';



@Controller('students')
 export class StudentController {
     @Get()
     getStudent( ) : FindStudentResponseDto[]
     {
         return "All students is being returned here ";
     }

     @Get('/:studentsId')
     getStudentId( @Param('studentsId') studentsId :string ) : FindStudentResponseDto
     { 
         // use backtik `` , location left of 1 hehe lol 
     return `student id ${studentsId}`
     }
    
    @Post()
    createStudent(@Body() body : CreateStudentDto ) : StudentResponseDto
    {
        return `student created scuessfully ${JSON.stringify(body)}`;
    }

    @Put('/:studentsId')
    editStudentId(@Param('studentsId') studentId : string , @Body() body : UpdateStudentDto ) : StudentResponseDto
    {
        return ` updated student info wise id ${studentId} ${JSON.stringify(body)} `;
    }

 }