import '../loading.css'
import love from '../img/loadingIcons/love.svg'
import death from '../img/loadingIcons/death.svg'
import robots from '../img/loadingIcons/robots.svg'

import part1 from '../img/loadingIcons/1.svg'
import part2 from '../img/loadingIcons/2.svg'
import part3 from '../img/loadingIcons/3.svg'

export default function LoadingScreen() {
    return (
        <div class="screen">
            <div class="intro">
                <ul class="icons">
                    <li>
                        <i><img src={part1} /></i>
                        <i class="fas fa-hand-spock"></i>
                        <i class="fas fa-allergies"></i>
                        <i class="fas fa-microchip"></i>
                        <i class="fas fa-splotch"></i>
                        <i class="fas fa-compact-disc"></i>
                        <i class="fas fa-baseball-ball"></i>
                        <i class="fas fa-crow"></i>
                        <i class="fas fa-crown"></i>
                        <i class="fab fa-drupal"></i>
                        <i class="fas fa-chess-rook"></i>
                        <i class="fas fa-hand-paper"></i>
                        <i class="fas fa-pastafarianism"></i>
                        <i class="fas fa-space-shuttle"></i>
                        <i class="fas fa-fire"></i>
                        <i><img src={love} alt="love" /></i>
                    </li>
                    <li>
                        <i><img src={part2} /></i>
                        <i class="fas fa-sim-card"></i>
                        <i class="fas fa-cog"></i>
                        <i class="fas fa-fish"></i>
                        <i class="fas fa-leaf"></i>
                        <i class="fas fa-bomb"></i>
                        <i class="fas fa-user-astronaut"></i>
                        <i class="fas fa-child"></i>
                        <i class="fas fa-cookie"></i>
                        <i class="fas fa-globe"></i>
                        <i class="fas fa-frog"></i>
                        <i class="fas fa-chess-bishop"></i>
                        <i class="fab fa-discord"></i>
                        <i class="fas fa-atom"></i>
                        <i class="fas fa-wrench"></i>
                        <i><img src={death} alt="death" /></i>
                    </li>
                    <li>
                        <i><img src={part3} /></i>
                        <i class="fas fa-brain"></i>
                        <i class="fas fa-gem"></i>
                        <i class="fas fa-tooth"></i>
                        <i class="fab fa-apple"></i>
                        <i class="fas fa-book-dead"></i>
                        <i class="fas fa-camera"></i>
                        <i class="fas fa-gamepad"></i>
                        <i class="fas fa-tree"></i>
                        <i class="fas fa-database"></i>
                        <i class="fas fa-compass"></i>
                        <i class="fas fa-coffee"></i>
                        <i class="fas fa-kiwi-bird"></i>
                        <i class="fas fa-prescription-bottle"></i>
                        <i class="fas fa-square"></i>
                        <i ><img src={robots} alt="robots" /></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}