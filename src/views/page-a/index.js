import { isMobile } from '@/utils'
import * as pc from './pc'
import * as mobile from './mobile'

export default isMobile() ? mobile : pc
