import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException 
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/images',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedMimes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (allowedMimes.includes(file.mimetype)) {
          callback(null, true);
        } else {
          callback(
            new BadRequestException('Solo se permiten imágenes JPEG o PNG'),
            false,
          );
        }
      },
      limits: { fileSize: 5 * 1024 * 1024 }, 
    }),
  )
  async create(
    @Body() product: Partial<Product>,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Product> {
    console.log('Producto recibido:', product);
    console.log('Archivo recibido:', file);
    if (file) {
      // Si se proporciona un archivo, guardamos la URL de la imagen
      //const fileUrl = `/uploads/images/${file.filename}`;
      //pruebas
      const fileUrl = `http://localhost:3000/uploads/images/${file.filename}`; 
      product.fileUrl = fileUrl;
    }
    return this.productService.create(product);
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/images',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedMimes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (allowedMimes.includes(file.mimetype)) {
          callback(null, true);
        } else {
          callback(
            new BadRequestException('Solo se permiten imágenes JPEG o PNG'),
            false,
          );
        }
      },
      limits: { fileSize: 5 * 1024 * 1024 }, 
    }),
  )
  async update(
    @Param('id') id: number,
    @Body() product: Partial<Product>,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Product> {
    console.log('Producto recibido:', product);
    console.log('Archivo recibido:', file);

    if (file) {
      const fileUrl = `http://localhost:3000/uploads/images/${file.filename}`;
      product.fileUrl = fileUrl;
    }

    return this.productService.update(id, product);
  }


  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.productService.remove(id);
  }

 
}
