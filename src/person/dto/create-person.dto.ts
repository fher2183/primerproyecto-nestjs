import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDate, Length, IsEmail, Matches } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({ description: 'DPI (Documento Personal de Identificación)', example: '1234567890123' })
  @IsString()
  @Length(13, 13)
  dpi: string;

  @ApiProperty({ description: 'NIT (Número de Identificación Tributaria)', required: false, example: '123456-7' })
  @IsOptional()
  @IsString()
  nit?: string;

  @ApiProperty({ description: 'Primer nombre', example: 'Juan' })
  @IsString()
  nombre1: string;

  @ApiProperty({ description: 'Segundo nombre', required: false, example: 'Antonio' })
  @IsOptional()
  @IsString()
  nombre2?: string;

  @ApiProperty({ description: 'Primer apellido', example: 'Pérez' })
  @IsString()
  apellido1: string;

  @ApiProperty({ description: 'Segundo apellido', required: false, example: 'García' })
  @IsOptional()
  @IsString()
  apellido2?: string;

  @ApiProperty({ 
    description: 'Fecha de nacimiento (formato: YYYY-MM-DD)', 
    required: false, 
    example: '1990-01-01',
    type: String 
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { 
    message: 'La fecha debe tener el formato YYYY-MM-DD' 
  })
  fecha_nacimiento?: string;

  @ApiProperty({ description: 'Género (M/F)', required: false, example: 'M' })
  @IsOptional()
  @IsString()
  @Matches(/^[MF]$/)
  genero?: string;

  @ApiProperty({ description: 'Estado civil', required: false, example: 'Soltero' })
  @IsOptional()
  @IsString()
  estado_civil?: string;

  @ApiProperty({ description: 'Número de teléfono', required: false, example: '2222-2222' })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty({ description: 'Número de celular', required: false, example: '3333-3333' })
  @IsOptional()
  @IsString()
  celular?: string;

  @ApiProperty({ description: 'Correo electrónico', required: false, example: 'juan@example.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Dirección completa', required: false })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty({ description: 'Municipio', required: false, example: 'Guatemala' })
  @IsOptional()
  @IsString()
  municipio?: string;

  @ApiProperty({ description: 'Departamento', required: false, example: 'Guatemala' })
  @IsOptional()
  @IsString()
  departamento?: string;

  @ApiProperty({ description: 'País', required: false, default: 'Guatemala', example: 'Guatemala' })
  @IsOptional()
  @IsString()
  pais?: string;
}
