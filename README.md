<div align="center">

![tanebi](https://socialify.git.ci/LagrangeDev/tanebi/image?description=1&font=Bitter&forks=1&issues=1&language=1&logo=https%3A%2F%2Fstatic.live.moe%2Flagrange.jpg&name=1&pattern=Brick+Wall&pulls=1&stargazers=1&theme=Light)

</div>

NTQQ Protocol Implementation with Pure TypeScript, derived from the following projects:
- [LagrangeDev/Lagrange.Core](https://github.com/LagrangeDev/Lagrange.Core)
- [takayama-lily/oicq](https://github.com/takayama-lily/oicq)
- [LagrangeDev/lagrangejs](https://github.com/LagrangeDev/lagrangejs)
- [NapNeko/NapCatQQ](https://github.com/NapNeko/NapCatQQ)

The word "tanebi" is from Japanese and means "tinder" in English or "火种" in Chinese. The name is in respect of previous and contemporary QQ protocol implementation projects. No matter they are alive or not, they are the "tanebi" of today's QQ bot development.

> It’s the blazing our sound
>
> We all sing out with the same heat
>
> We will go with our song
>
> Yet still tomorrow is unknown

## Features

<details>
<summary> Protocol </summary>

- [x] Windows[^1]
- [x] macOS[^1]
- [x] Linux

[^1]: Theoretically. You need to find a sign server yourself.
</details>

<details>
<summary> Login </summary>

- [x] QRCode
- [x] NTEasyLogin
- [ ] Password[^2]

[^2]: Deprecated and not planned.
</details>

<details>
<summary> Message </summary>

- [x] Text
- [ ] Face
- [x] Mention (At)
- [x] Image
- [x] Reply
- [ ] Record
- [ ] Video
- [ ] Market Face
- [ ] Long Message
- [ ] Multi Forwarded Message
- [ ] XML
- [ ] JSON
- [ ] Markdown
</details>

<details>
<summary> Operation </summary>

- [x] Fetch friends
- [x] Fetch groups
- [x] Fetch group members
- [x] Send poke
- [ ] Send face reaction
- [ ] Recall message
- [ ] Leave group
- [ ] Set member card
- [ ] Ban (mute) member
- [ ] Kick member
- [ ] Set member to admin
- [x] Set special title
- [ ] Handle friend request
- [ ] Handle group request
- [ ] Handle group invitation
- [ ] Get client key
- [ ] Get cookies
</details>

<details>
<summary> Event </summary>

- [ ] Bot offline
- [ ] Friend poke
- [ ] Friend message recall
- [x] Friend request
- [ ] Group poke
- [ ] Group message recall
- [x] Group join request
- [x] Group invited join request
- [x] Group member increase
- [x] Group member decrease
- [x] Group invitation
- [x] Group admin change
- [ ] Group essence message
- [ ] Group face reaction
- [ ] Group to do
</details>

## Contribution

> [!TIP]
> If you want to contribute to this project, please consider using **Visual Studio Code** instead of JetBrains IDEs to improve type inferring performance and enhance coding experience.
