import { IScraperOptions, {{cp;type}}Scraper, I{{cp;type}}Data, {{cp;type}} } from 'source-scraper-core';

export type I{{cp;name}}ScraperOptions = IScraperOptions;

export type I{{cp;name}}ScraperSourceData = I{{cp;type}}Data<{{cp;type}}>;

export class {{cp;name}}Scraper extends {{cp;type}}Scraper<I{{cp;type}}Data> {
    public name: string = '{{lc;name}}';
    public domains: string[] = [{{domains}}];
    public urlPattern: RegExp = /(?:(?:https?:)?\/\/)?(?:[^.]+\.)?{{urlPattern}}/i;
    public defaultOptions: I{{cp;name}}ScraperOptions = {};
	
    protected async exec(ur: string): Promise<I{{cp;type}}Data> {
        
    }
}