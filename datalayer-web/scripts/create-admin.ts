import { createUser, getUserByEmail } from '../app/lib/users.server';

// Vytvoří (nebo ohlásí existenci) admin uživatele.
// Použití:
//   npm run admin:create -- <email> <heslo> ["Jméno"]
// Příklad:
//   GOOGLE_CLOUD_PROJECT=datalayer-web npm run admin:create -- mail@vit.cz Heslo123 "Vít Novotný"

async function main() {
  const [email, password, name = ''] = process.argv.slice(2);
  if (!email || !password) {
    console.error('Použití: npm run admin:create -- <email> <heslo> ["Jméno"]');
    process.exit(1);
  }
  if (password.length < 8) {
    console.error('Heslo musí mít aspoň 8 znaků.');
    process.exit(1);
  }
  if (await getUserByEmail(email)) {
    console.error(`Uživatel ${email} už existuje.`);
    process.exit(1);
  }
  const user = await createUser({ email, password, name, role: 'admin' });
  console.log(`Admin vytvořen: ${user.email} (${user.id})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
