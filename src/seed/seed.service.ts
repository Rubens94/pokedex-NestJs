import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResonse } from './interfaces/poke-response-interface';

@Injectable()
export class SeedService {

  private readonly axios:AxiosInstance = axios;

  async executeSeed() {
    const { data } = await axios.get<PokeResonse>('https://pokeapi.co/api/v2/pokemon?limit=10');
    
    data.results.forEach(({name, url}) => { 
      const segments = url.split('/');
      const no:number = +segments[ segments.length - 2];
      console.log({name, no });
    });
    return data.results;
  }
}
