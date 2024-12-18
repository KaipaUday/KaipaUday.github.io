<script lang="js">
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    import Button, { Label } from '@smui/button';
    import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text';
    let open = $state(true);
    let accessCode = $state('');
</script>


<Dialog
  bind:open
  scrimClickAction=""
  escapeKeyAction=""
  aria-labelledby="mandatory-title"
  aria-describedby="mandatory-content"
>
<form action="" method="">
    <Content id="mandatory-content">
        <div>
            <Textfield bind:value={accessCode} label="Access code" >
              {#snippet helper()}
                <HelperText>Write to <a href="mailto:uday.kaipa@icloud.com">uday.kaipa@icloud.com</a> for access code.</HelperText>
              {/snippet}
            </Textfield>
        
          </div>
      </Content>
      <Actions>
        <Button onclick={() => (open = false)}>
          <Label>Enter</Label>
        </Button>
    
      </Actions>
</form>
</Dialog>





