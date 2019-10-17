import {Command, flags} from '@oclif/command'
var afplay = require('play-sound')({})

class MindfullnessCli extends Command {
  static description = 'Help to concentrate with clock and horn sound playing in background'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    interval: flags.string({char: 't', description: 'interval to wait'})
  }

  async run() {
    const {args, flags} = this.parse(MindfullnessCli)

    this.playTickTackLoop();
    setInterval(this.playTickTackLoop, 26000); //audio has 26s
    setInterval(this.playHornLoop, 73000); //audio has 13s + wait 30s
  }

  async playTickTackLoop() {
    afplay.play('assets/old_clock_tick_tack.mp3', { afplay: ['-v', 0.5 ] }, function(err){
      if (err) throw err
    })
  }

  async playHornLoop() {
    afplay.play('assets/sirene.mp3', { afplay: ['-v', 0.5 ] }, function(err){
      if (err) throw err
    })
  }
}

export = MindfullnessCli
