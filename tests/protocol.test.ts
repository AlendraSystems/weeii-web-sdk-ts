import { describe, it, expect } from 'vitest';
import { WEEII_PROTOCOL } from '../src/protocol.js';

describe('WEEII_PROTOCOL', () => {
  describe('fields', () => {
    it('maps requestChannel to Spanish field name', () => {
      expect(WEEII_PROTOCOL.fields?.requestChannel).toBe('interfaz');
    });

    it('maps responseChannel to Spanish field name', () => {
      expect(WEEII_PROTOCOL.fields?.responseChannel).toBe('interfaz');
    });

    it('maps messageId to id_mensaje', () => {
      expect(WEEII_PROTOCOL.fields?.messageId).toBe('id_mensaje');
    });

    it('maps code to codigo', () => {
      expect(WEEII_PROTOCOL.fields?.code).toBe('codigo');
    });

    it('maps description to descripcion', () => {
      expect(WEEII_PROTOCOL.fields?.description).toBe('descripcion');
    });

    it('maps payload to datos', () => {
      expect(WEEII_PROTOCOL.fields?.payload).toBe('datos');
    });

    it('maps body to datos', () => {
      expect(WEEII_PROTOCOL.fields?.body).toBe('datos');
    });
  });

  describe('codes', () => {
    it('uses OK as the success code', () => {
      expect(WEEII_PROTOCOL.codes?.success).toBe('OK');
    });

    it('uses NEUTRO as the interim code', () => {
      expect(WEEII_PROTOCOL.codes?.interim).toBe('NEUTRO');
    });

    it('does not list explicit error codes (any non-OK non-NEUTRO code is an error)', () => {
      expect(WEEII_PROTOCOL.codes?.error).toBeUndefined();
    });
  });
});
