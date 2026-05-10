import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { SearchableSelect } from '../components/ui/SearchableSelect';
import { MultiSelect } from '../components/ui/MultiSelect';
import { SearchableMultiSelect } from '../components/ui/SearchableMultiSelect';
import { Checkbox } from '../components/ui/Checkbox';
import { Radio } from '../components/ui/Radio';
import { Button } from '../components/ui/Button';
import { Label } from '../components/ui/Label';

const FormElements = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-100">Form Elements</h1>
        <p className="mt-1 text-sm text-zinc-400">
          A collection of styled form inputs used across the application.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Inputs Section */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-zinc-200">Basic Inputs</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="text-input">Text Input</Label>
              <Input
                id="text-input"
                type="text"
                placeholder="Enter some text"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-input">Email Input</Label>
              <Input
                id="email-input"
                type="email"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password-input">Password Input</Label>
              <Input
                id="password-input"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="number-input">Number Input</Label>
              <Input
                id="number-input"
                type="number"
                placeholder="0"
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="textarea-input">Textarea</Label>
              <Textarea
                id="textarea-input"
                placeholder="Type your message here..."
                rows={4}
              />
            </div>
          </div>
        </section>

        {/* Selection Inputs */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-zinc-200">Selection Controls</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="select-input">Standard Dropdown</Label>
              <Select id="select-input" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Searchable Dropdown</Label>
              <SearchableSelect 
                options={['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Japan']}
                placeholder="Select a country..."
              />
            </div>

            <div className="space-y-2">
              <Label>Multi Select Dropdown</Label>
              <MultiSelect 
                options={['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Ember']}
                placeholder="Select frameworks..."
              />
            </div>

            <div className="space-y-2">
              <Label>Searchable Multi Select</Label>
              <SearchableMultiSelect 
                options={['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Ember', 'Solid', 'Qwik', 'Astro']}
                placeholder="Search & select frameworks..."
              />
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-1" />
                <Label htmlFor="checkbox-1">
                  Accept terms and conditions
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-2" disabled />
                <Label htmlFor="checkbox-2" className="text-zinc-500">
                  Disabled checkbox
                </Label>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-sm font-medium text-zinc-200">Radio Group</p>
              <div className="flex items-center space-x-2">
                <Radio id="radio-1" name="radio-group" defaultChecked />
                <Label htmlFor="radio-1">
                  Default Option
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Radio id="radio-2" name="radio-group" />
                <Label htmlFor="radio-2">
                  Alternative Option
                </Label>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Inputs */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-zinc-200">Advanced Inputs</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="file-upload">File Upload</Label>
              <Input id="file-upload" type="file" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date-input">Date Picker</Label>
              <Input id="date-input" type="date" />
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-zinc-200">Buttons</h2>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">
              Primary Button
            </Button>
            
            <Button variant="outline">
              Outline Button
            </Button>

            <Button variant="destructive">
              Destructive
            </Button>

            <Button disabled>
              Disabled
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormElements;
