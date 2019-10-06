export class RestAddresses {
    // Api address goes here
    static baseUrl =  'http://food.local/api/food/';
    static readonly GUESTTOKEN = RestAddresses.baseUrl + 'guest-token'
    static readonly FOODS = RestAddresses.baseUrl +  "foods";
    static readonly VOTE = RestAddresses.baseUrl +  "vote";
}