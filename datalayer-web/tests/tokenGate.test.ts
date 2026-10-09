import { describe, expect, it } from 'vitest';
import { checkEnvToken, tokenFromRequest } from '~/lib/tokenGate';

const TOKEN = 'x'.repeat(40);

describe('brána tokenem', () => {
  it('bez proměnné, s krátkou, bez tokenu a se špatným tokenem odmítne', () => {
    expect(checkEnvToken(undefined, TOKEN)).toEqual({ ok: false, reason: 'no-env' });
    expect(checkEnvToken('kratky', 'kratky')).toEqual({ ok: false, reason: 'too-short' });
    expect(checkEnvToken(TOKEN, '')).toEqual({ ok: false, reason: 'no-token' });
    expect(checkEnvToken(TOKEN, null)).toEqual({ ok: false, reason: 'no-token' });
    expect(checkEnvToken(TOKEN, 'y'.repeat(40))).toEqual({ ok: false, reason: 'mismatch' });
  });

  it('správný token pustí', () => {
    expect(checkEnvToken(TOKEN, TOKEN)).toEqual({ ok: true });
  });

  it('token bere přednostně z hlavičky', () => {
    const r1 = tokenFromRequest(new Request('https://x.cz/migrate?token=q', { headers: { 'X-Service-Token': 'h' } }));
    expect(r1).toEqual({ token: 'h', fromHeader: true });
    const r2 = tokenFromRequest(new Request('https://x.cz/migrate?token=q'));
    expect(r2).toEqual({ token: 'q', fromHeader: false });
  });
});
