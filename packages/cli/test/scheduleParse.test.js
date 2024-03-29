/* global describe, expect, it, beforeAll */
import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import parseSchedule from '../scripts/parseSchedule'

// Array.from(document.querySelectorAll('.rasp_tabl_day > table.rasp_tabl'))

let result

// https://itmo.ru/ru/schedule/0/D41002/raspisanie_zanyatiy_D41002.htm
// https://itmo.ru/ru/schedule/0/A41424/raspisanie_zanyatiy_A41424.htm
// https://itmo.ru/ru/schedule/0/M3306/schedule.htm

beforeAll(async () => {
  const response = await fetch('https://itmo.ru/ru/schedule/0/M3306/schedule.htm')
  const parsed = await response.text()
  result = parseSchedule(new JSDOM(parsed))
})

describe('Script should work correct', () => {
  it('should return 2 arrays', () => {
    expect(result).toMatchObject({
      odd: expect.any(Array),
      even: expect.any(Array)
    })
  })

  it('should return not empty arrays', () => {
    expect(result.even.length).toBeGreaterThan(0)
    expect(result.odd.length).toBeGreaterThan(0)
  })
})
