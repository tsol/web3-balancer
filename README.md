This is a demo project which allows user to monitor his assets in BSC testnet network
and see current exchange rates of various tokens.

Front end is using NextJs, vanilla-extract styling and zustand store.
Backend is using NestJs with prisma as orm.
Both use ethers library to communicate with blockchain.

## Starting up backend

First, run the backend server. 

1. Install npm modules with ``npm install``
2. Edit .env file to change your database connection settings.
3. Make sure postgresql server is running and credetials in .env are correct.
4. Run prisma migrations ``npx prisma migrate deploy``
5. Run the server with ``npm run dev``

```bash
cd back
npm install
vi .env
npx prisma migrate deploy
npm run dev
```

The nest server should run on localhost:3001 waiting for connections.
Every 3 minutes update task should run fetchig 30 of ~400 known tokens from the free service.

The server is now ready for requests at
1. [http://localhost:3001/api/assets/account_number](http://localhost:3001/api/assets/0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8)
2. [http://localhost:3001/api/marketCap](http://localhost:3001/api/marketCap)

## Starting up frontend

Running frondend is fairly straightforward.

```bash
cd front
npm install
npm run dev
```

That will run application on port 3000.

1. [http://localhost:3000/](http://localhost:3000/) - welcome page
2. [http://localhost:3000/assets](http://localhost:3000/assets) - balance check page
3. [http://localhost:3000/rates](http://localhost:3000/rates) - token exchange rates


## Troubleshooting

In case of any questions or problems please contact me via Telegram at @xor_bx_bx



